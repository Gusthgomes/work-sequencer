import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";
import { ITENS_KIT } from "@/app/lib/types";

interface ObraInput {
  numeroObra: string;
  dataObra: string; // YYYY-MM-DD
}

export async function POST(request: Request) {
  const auth = await requireAuth(["ADMIN"]);
  if (auth instanceof Response) return auth;

  const { obras }: { obras: ObraInput[] } = await request.json();

  if (!Array.isArray(obras) || obras.length === 0) {
    return Response.json({ error: "Lista de obras inválida" }, { status: 400 });
  }

  const created: string[] = [];
  const skipped: string[] = [];
  const errors: { numeroObra: string; error: string }[] = [];

  for (const { numeroObra, dataObra } of obras) {
    if (!numeroObra || !dataObra) {
      errors.push({ numeroObra: numeroObra ?? "?", error: "Dados incompletos" });
      continue;
    }

    try {
      const existing = await prisma.obra.findUnique({ where: { numeroObra } });
      if (existing) {
        skipped.push(numeroObra);
        continue;
      }

      await prisma.obra.create({
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
      });

      created.push(numeroObra);
    } catch {
      errors.push({ numeroObra, error: "Erro ao criar obra" });
    }
  }

  return Response.json({ created, skipped, errors }, { status: 201 });
}
