import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAuth();
  if (auth instanceof Response) return auth;

  const { id } = await params;
  const obra = await prisma.obra.findUnique({
    where: { id },
    include: {
      carrinhos: {
        include: { itens: { include: { pendencias: true } } },
      },
    },
  });

  if (!obra) {
    return Response.json({ error: "Obra não encontrada" }, { status: 404 });
  }

  return Response.json(obra);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAuth(["ADMIN"]);
  if (auth instanceof Response) return auth;

  const { id } = await params;
  await prisma.obra.delete({ where: { id } });
  return Response.json({ ok: true });
}
