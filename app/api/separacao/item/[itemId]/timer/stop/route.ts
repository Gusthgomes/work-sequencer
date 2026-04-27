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
    data: { timerEnd: new Date() },
  });

  return Response.json(item);
}
