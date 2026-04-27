import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ itemId: string }> }
) {
  const auth = await requireAuth(["DALG", "ADMIN"]);
  if (auth instanceof Response) return auth;

  const { itemId } = await params;
  const { status } = await request.json();

  const item = await prisma.itemSeparacao.update({
    where: { id: itemId },
    data: { status },
    include: { carrinho: { include: { obra: true, itens: true } } },
  });

  const carrinho = item.carrinho;
  const todosItens = carrinho.itens;
  const todosConcluidos = todosItens.every((i) => i.status === "concluido");
  const algumPendente = todosItens.some((i) => i.status === "pendente");
  const algumEmAndamento = todosItens.some((i) => i.status === "em_andamento");

  let novoStatus: string = carrinho.status;
  if (todosConcluidos) novoStatus = "concluido";
  else if (algumPendente) novoStatus = "pendente";
  else if (algumEmAndamento) novoStatus = "em_andamento";

  if (novoStatus !== carrinho.status) {
    await prisma.carrinho.update({
      where: { id: carrinho.id },
      data: { status: novoStatus as never },
    });
  }

  const todosCarrinhosDaObra = await prisma.carrinho.findMany({
    where: { obraId: carrinho.obraId },
  });
  const todosCarrinhosConcluidos = todosCarrinhosDaObra.every(
    (c) => c.id === carrinho.id ? novoStatus === "concluido" : c.status === "concluido"
  );

  if (todosCarrinhosConcluidos) {
    await prisma.obra.update({
      where: { id: carrinho.obraId },
      data: { statusGeral: "separado" },
    });
  }

  return Response.json(item);
}
