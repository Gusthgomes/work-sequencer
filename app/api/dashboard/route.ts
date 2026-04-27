import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";

export async function GET() {
  const auth = await requireAuth();
  if (auth instanceof Response) return auth;

  const [
    totalObras,
    emAndamento,
    separadas,
    emMontagem,
    concluidas,
    pendentes,
    carrinhos3B,
    carrinhos3K,
  ] = await Promise.all([
    prisma.obra.count({ where: { statusGeral: { not: "concluido" } } }),
    prisma.obra.count({ where: { statusGeral: "em_andamento" } }),
    prisma.obra.count({ where: { statusGeral: "separado" } }),
    prisma.obra.count({ where: { statusGeral: "em_montagem" } }),
    prisma.obra.count({ where: { statusGeral: "concluido" } }),
    prisma.obra.count({ where: { statusGeral: "pendente" } }),
    prisma.carrinho.count({
      where: { kit: "KIT_3B", status: { not: "montagem_concluida" } },
    }),
    prisma.carrinho.count({
      where: { kit: "KIT_3K", status: { not: "montagem_concluida" } },
    }),
  ]);

  const diferencaLinhas = Math.abs(carrinhos3B - carrinhos3K);
  const alertaDiferenca = diferencaLinhas >= 3;

  return Response.json({
    totalObras,
    emAndamento,
    separadas,
    emMontagem,
    concluidas,
    pendentes,
    carrinhos3B,
    carrinhos3K,
    diferencaLinhas,
    alertaDiferenca,
  });
}
