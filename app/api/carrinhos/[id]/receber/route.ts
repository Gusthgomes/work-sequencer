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

  const updated = await prisma.carrinho.update({
    where: { id },
    data: { recebido: true, status: "em_montagem" },
    include: { obra: true, itens: true },
  });

  await prisma.obra.update({
    where: { id: carrinho.obraId },
    data: { statusGeral: "em_montagem" },
  });

  return Response.json(updated);
}
