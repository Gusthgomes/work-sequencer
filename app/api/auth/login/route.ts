import { prisma } from "@/app/lib/prisma";
import { createAuthResponse } from "@/app/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        { error: "Email e senha são obrigatórios" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return Response.json({ error: "Credenciais inválidas" }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return Response.json({ error: "Credenciais inválidas" }, { status: 401 });
    }

    return createAuthResponse({
      userId: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    });
  } catch {
    return Response.json({ error: "Erro interno" }, { status: 500 });
  }
}
