import "dotenv/config";
import { PrismaClient } from "../app/lib/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Iniciando seed...");

  const adminPassword = await bcrypt.hash("admin123", 12);
  const dalgPassword = await bcrypt.hash("dalg123", 12);
  const dproPassword = await bcrypt.hash("dpro123", 12);

  await prisma.user.upsert({
    where: { email: "admin@tkelevetor.com" },
    update: {},
    create: {
      name: "Administrador",
      email: "admin@tkelevetor.com",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  await prisma.user.upsert({
    where: { email: "dalg@tkelevetor.com" },
    update: {},
    create: {
      name: "Colaborador DALG",
      email: "dalg@tkelevetor.com",
      password: dalgPassword,
      role: "DALG",
    },
  });

  await prisma.user.upsert({
    where: { email: "dpro@tkelevetor.com" },
    update: {},
    create: {
      name: "Colaborador DPRO",
      email: "dpro@tkelevetor.com",
      password: dproPassword,
      role: "DPRO",
    },
  });

  console.log("✅ Usuários criados:");
  console.log("   admin@tkelevetor.com / admin123  (ADMIN)");
  console.log("   dalg@tkelevetor.com  / dalg123   (DALG)");
  console.log("   dpro@tkelevetor.com  / dpro123   (DPRO)");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
