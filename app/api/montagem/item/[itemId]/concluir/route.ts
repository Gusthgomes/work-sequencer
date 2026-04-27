import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function PATCH(
  _request: Request,
  { params }: { params: Promise<{ itemId: string }> }
) {
  const auth = await requireAuth(["DPRO", "ADMIN"]);
  if (auth instanceof Response) return auth;

  const { itemId } = await params;

  const item = await prisma.itemSeparacao.update({
    where: { id: itemId },
    data: { montagemStatus: "concluida" },
    include: { carrinho: { include: { obra: true, itens: true } } },
  });

  const todosItens = item.carrinho.itens;
  const todosConcluidos = todosItens.every(
    (i) => i.id === itemId ? true : i.montagemStatus === "concluida"
  );

  if (todosConcluidos) {
    await prisma.carrinho.update({
      where: { id: item.carrinhoId },
      data: { status: "montagem_concluida" },
    });

    const todosCarrinhos = await prisma.carrinho.findMany({
      where: { obraId: item.carrinho.obraId },
    });
    const todosCarrinhosConcluidos = todosCarrinhos.every(
      (c) => c.id === item.carrinhoId ? true : c.status === "montagem_concluida"
    );

    if (todosCarrinhosConcluidos) {
      await prisma.obra.update({
        where: { id: item.carrinho.obraId },
        data: { statusGeral: "concluido" },
      });
    }
  }

  return Response.json(item);
}
