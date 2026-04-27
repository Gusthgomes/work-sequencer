import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ itemId: string }> }
) {
  const auth = await requireAuth(["DALG", "ADMIN"]);
  if (auth instanceof Response) return auth;

  const { itemId } = await params;
  const { codigoMaterial, quantidade, observacao } = await request.json();

  if (!codigoMaterial || !quantidade) {
    return Response.json(
      { error: "Código do material e quantidade são obrigatórios" },
      { status: 400 }
    );
  }

  const pendencia = await prisma.pendenciaSeparacao.create({
    data: { itemSeparacaoId: itemId, codigoMaterial, quantidade, observacao },
  });

  await prisma.itemSeparacao.update({
    where: { id: itemId },
    data: { status: "pendente" },
  });

  return Response.json(pendencia, { status: 201 });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ itemId: string }> }
) {
  const auth = await requireAuth(["DALG", "ADMIN"]);
  if (auth instanceof Response) return auth;

  const { itemId } = await params;
  await prisma.pendenciaSeparacao.delete({ where: { id: itemId } });
  return Response.json({ ok: true });
}
