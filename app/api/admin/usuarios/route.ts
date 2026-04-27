import { prisma } from "@/app/lib/prisma";
import { requireAuth } from "@/app/lib/auth";
import bcrypt from "bcryptjs";

export async function GET() {
  const auth = await requireAuth(["ADMIN"]);
  if (auth instanceof Response) return auth;

  const usuarios = await prisma.user.findMany({
    select: { id: true, name: true, email: true, role: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });

  return Response.json(usuarios);
}

export async function POST(request: Request) {
  const auth = await requireAuth(["ADMIN"]);
  if (auth instanceof Response) return auth;

  const { name, email, password, role } = await request.json();

  if (!name || !email || !password || !role) {
    return Response.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return Response.json({ error: "Email já cadastrado" }, { status: 409 });
  }

  const hash = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { name, email, password: hash, role },
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  });

  return Response.json(user, { status: 201 });
}

export async function DELETE(request: Request) {
  const auth = await requireAuth(["ADMIN"]);
  if (auth instanceof Response) return auth;

  const { id } = await request.json();
  await prisma.user.delete({ where: { id } });
  return Response.json({ ok: true });
}
