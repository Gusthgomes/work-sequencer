import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ itemId: string }> }
) {
  const auth = await requireAuth(["DALG", "ADMIN"]);
  if (auth instanceof Response) return auth;

  const { itemId } = await params;
  const item = await prisma.itemSeparacao.update({
    where: { id: itemId },
    data: { timerStart: new Date(), status: "em_andamento" },
  });

  await prisma.carrinho.update({
    where: { id: item.carrinhoId },
    data: { status: "em_andamento" },
  });

  return Response.json(item);
}
