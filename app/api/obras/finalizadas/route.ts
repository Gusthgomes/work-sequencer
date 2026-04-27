import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function GET() {
  const auth = await requireAuth();
  if (auth instanceof Response) return auth;

  const obras = await prisma.obra.findMany({
    where: { statusGeral: "concluido" },
    include: {
      carrinhos: {
        include: { itens: { include: { pendencias: true } } },
      },
    },
    orderBy: { updatedAt: "desc" },
  });

  return Response.json(obras);
}
