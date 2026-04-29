import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function PATCH(
  _request: Request,
  { params }: { params: Promise<{ pendenciaId: string }> }
) {
  const auth = await requireAuth(["DALG", "ADMIN"]);
  if (auth instanceof Response) return auth;

  const { pendenciaId } = await params;

  const pendencia = await prisma.pendenciaSeparacao.update({
    where: { id: pendenciaId },
    data: { tratado: true, tratatoAt: new Date() },
    include: {
      item: {
        include: { pendencias: true },
      },
    },
  });

  // Se todas as pendências do item estiverem tratadas, volta o item para nao_iniciado
  const todasTratadas = pendencia.item.pendencias.every((p) => p.tratado);
  if (todasTratadas) {
    await prisma.itemSeparacao.update({
      where: { id: pendencia.item.id },
      data: { status: "nao_iniciado" },
    });

    // Recalcula status do carrinho
    const carrinho = await prisma.carrinho.findUnique({
      where: { id: pendencia.item.carrinhoId },
      include: { itens: true },
    });
    if (carrinho) {
      const algumPendente = carrinho.itens.some(
        (i) => i.id !== pendencia.item.id && i.status === "pendente"
      );
      const algumEmAndamento = carrinho.itens.some(
        (i) => i.status === "em_andamento"
      );
      if (!algumPendente && !algumEmAndamento) {
        await prisma.carrinho.update({
          where: { id: carrinho.id },
          data: { status: "em_andamento" },
        });
      }
    }
  }

  return Response.json({ ok: true, todasTratadas });
}
