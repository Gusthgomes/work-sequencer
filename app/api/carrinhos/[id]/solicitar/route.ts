import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function PATCH(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAuth(["DPRO", "ADMIN"]);
  if (auth instanceof Response) return auth;

  const { id } = await params;

  const carrinho = await prisma.carrinho.findUnique({ where: { id } });
  if (!carrinho) {
    return Response.json({ error: "Carrinho não encontrado" }, { status: 404 });
  }
  if (carrinho.status !== "concluido") {
    return Response.json(
      { error: "Carrinho ainda não tem separação concluída" },
      { status: 400 }
    );
  }

  const updated = await prisma.carrinho.update({
    where: { id },
    data: { solicitado: true, status: "em_movimentacao" },
    include: { obra: true, itens: true },
  });

  return Response.json(updated);
}
