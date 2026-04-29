import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function GET() {
  const auth = await requireAuth();
  if (auth instanceof Response) return auth;

  const pendencias = await prisma.pendenciaSeparacao.findMany({
    where: { tratado: false },
    include: {
      item: {
        include: {
          carrinho: {
            include: { obra: true },
          },
        },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  const result = pendencias.map((p) => ({
    id: p.id,
    codigoMaterial: p.codigoMaterial,
    quantidade: p.quantidade,
    observacao: p.observacao,
    tratado: p.tratado,
    tratatoAt: p.tratatoAt,
    createdAt: p.createdAt,
    item: {
      id: p.item.id,
      nome: p.item.nome,
      banca: p.item.banca,
    },
    kit: p.item.carrinho.kit,
    obraId: p.item.carrinho.obra.id,
    numeroObra: p.item.carrinho.obra.numeroObra,
    dataObra: p.item.carrinho.obra.dataObra,
  }));

  return Response.json(result);
}
