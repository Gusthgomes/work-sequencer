import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;
const COOKIE_NAME = "ws_token";

export interface JWTPayload {
  userId: string;
  email: string;
  role: "ADMIN" | "DALG" | "DPRO";
  name: string;
}

export function signToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "8h" });
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<JWTPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

export function createAuthResponse(payload: JWTPayload) {
  const token = signToken(payload);
  const response = Response.json({ user: payload, token });
  response.headers.set(
    "Set-Cookie",
    `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${8 * 60 * 60}`
  );
  return response;
}

export async function requireAuth(
  allowedRoles?: Array<"ADMIN" | "DALG" | "DPRO">
): Promise<JWTPayload | Response> {
  const session = await getSession();
  if (!session) {
    return Response.json({ error: "Não autenticado" }, { status: 401 });
  }
  if (allowedRoles && !allowedRoles.includes(session.role)) {
    return Response.json({ error: "Sem permissão" }, { status: 403 });
  }
  return session;
}
