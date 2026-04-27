/**
 * Corrige obras salvas com meia-noite UTC (apareciam um dia antes no Brasil).
 * Adiciona 12 horas → meio-dia UTC → data correta em qualquer fuso UTC-12..UTC+12.
 *
 * Execute uma única vez:
 *   npx tsx prisma/fix-datas-obras.ts
 */
import "dotenv/config";
import { PrismaClient } from "../app/lib/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as never);

async function main() {
  const obras = await prisma.obra.findMany({ select: { id: true, numeroObra: true, dataObra: true } });

  let fixed = 0;
  for (const obra of obras) {
    const d = new Date(obra.dataObra);
    // Se a hora UTC for 00:00 a data precisa de correção
    if (d.getUTCHours() === 0 && d.getUTCMinutes() === 0) {
      const corrected = new Date(d.getTime() + 12 * 60 * 60 * 1000); // +12h
      await prisma.obra.update({ where: { id: obra.id }, data: { dataObra: corrected } });
      console.log(`✅ ${obra.numeroObra}: ${d.toISOString()} → ${corrected.toISOString()}`);
      fixed++;
    }
  }

  console.log(`\nTotal corrigidas: ${fixed} / ${obras.length}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
