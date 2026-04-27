import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ itemId: string }> }
) {
  const auth = await requireAuth(["DPRO", "ADMIN"]);
  if (auth instanceof Response) return auth;

  const { itemId } = await params;
  const { motivo } = await request.json();

  if (!motivo) {
    return Response.json(
      { error: "Motivo é obrigatório" },
      { status: 400 }
    );
  }

  const item = await prisma.itemSeparacao.update({
    where: { id: itemId },
    data: { montagemStatus: "nao_completa", montagemObservacao: motivo },
    include: { carrinho: true },
  });

  await prisma.carrinho.update({
    where: { id: item.carrinhoId },
    data: { status: "montagem_pendente" },
  });

  await prisma.obra.update({
    where: { id: item.carrinho.obraId },
    data: { statusGeral: "em_montagem" },
  });

  return Response.json(item);
}
