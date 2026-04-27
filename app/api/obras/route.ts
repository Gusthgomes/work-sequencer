import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";
import { ITENS_KIT } from "@/app/lib/types";

export async function GET(request: Request) {
  const auth = await requireAuth();
  if (auth instanceof Response) return auth;

  const { searchParams } = new URL(request.url);
  const data = searchParams.get("data"); // formato: YYYY-MM-DD

  const obras = await prisma.obra.findMany({
    where: {
      statusGeral: { not: "concluido" },
      ...(data
        ? {
            dataObra: {
              gte: new Date(`${data}T00:00:00.000Z`),
              lte: new Date(`${data}T23:59:59.999Z`),
            },
          }
        : {}),
    },
    include: {
      carrinhos: {
        include: {
          itens: { include: { pendencias: true } },
        },
      },
    },
    orderBy: [{ dataObra: "asc" }, { createdAt: "asc" }],
  });

  return Response.json(obras);
}

export async function POST(request: Request) {
  const auth = await requireAuth(["ADMIN"]);
  if (auth instanceof Response) return auth;

  const { numeroObra, dataObra } = await request.json();

  if (!numeroObra || !dataObra) {
    return Response.json(
      { error: "Número da obra e data são obrigatórios" },
      { status: 400 }
    );
  }

  const existing = await prisma.obra.findUnique({ where: { numeroObra } });
  if (existing) {
    return Response.json({ error: "Obra já cadastrada" }, { status: 409 });
  }

  const obra = await prisma.obra.create({
    data: {
      numeroObra,
      dataObra: new Date(`${dataObra}T12:00:00Z`),
      carrinhos: {
        create: (["KIT_3B", "KIT_3K"] as const).map((kit) => ({
          kit,
          itens: {
            create: ITENS_KIT[kit].map((item) => ({
              nome: item.nome,
              banca: item.banca,
            })),
          },
        })),
      },
    },
    include: {
      carrinhos: { include: { itens: true } },
    },
  });

  return Response.json(obra, { status: 201 });
}
