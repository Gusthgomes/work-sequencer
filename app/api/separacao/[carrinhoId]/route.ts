import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ carrinhoId: string }> }
) {
  const auth = await requireAuth();
  if (auth instanceof Response) return auth;

  const { carrinhoId } = await params;

  const itens = await prisma.itemSeparacao.findMany({
    where: { carrinhoId },
    include: { pendencias: true },
    orderBy: { createdAt: "asc" },
  });

  return Response.json(itens);
}
