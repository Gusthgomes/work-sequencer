import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function GET(request: Request) {
  const auth = await requireAuth();
  if (auth instanceof Response) return auth;

  const { searchParams } = new URL(request.url);
  const obraId = searchParams.get("obraId");
  const kit = searchParams.get("kit");
  const status = searchParams.get("status");

  const carrinhos = await prisma.carrinho.findMany({
    where: {
      ...(obraId ? { obraId } : {}),
      ...(kit ? { kit: kit as never } : {}),
      ...(status ? { status: status as never } : {}),
    },
    include: {
      obra: true,
      itens: { include: { pendencias: true } },
    },
    orderBy: { updatedAt: "asc" },
  });

  return Response.json(carrinhos);
}
