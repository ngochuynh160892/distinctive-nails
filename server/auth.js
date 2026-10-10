import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

export const DEFAULT_USER = "admin";
export const DEFAULT_PASSWORD = "distinctive";
export const TOKEN_DAYS = 7;

export function hashPassword(password, salt = randomBytes(16).toString("hex")) {
  const hash = scryptSync(password, salt, 32).toString("hex");
  return { salt, hash };
}

export function verifyPassword(password, salt, hash) {
  const next = scryptSync(password, salt, 32);
  const prev = Buffer.from(hash, "hex");
  if (next.length !== prev.length) return false;
  return timingSafeEqual(next, prev);
}

export function signToken(auth) {
  const payload = Buffer.from(
    JSON.stringify({ u: auth.username, exp: Date.now() + TOKEN_DAYS * 86400000 })
  ).toString("base64url");
  const sig = createHmac("sha256", auth.secret).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function readToken(cookieHeader) {
  const match = String(cookieHeader || "")
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("admin_token="));
  if (!match) return "";
  return decodeURIComponent(match.slice("admin_token=".length));
}

export function verifyToken(token, auth) {
  if (!token || !auth?.secret) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = createHmac("sha256", auth.secret).update(payload).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return data.exp > Date.now();
  } catch {
    return false;
  }
}

export function cookieOptions() {
  const secure = process.env.VERCEL ? "; Secure" : "";
  return `HttpOnly; Path=/; SameSite=Lax${secure}`;
}

export function tokenCookie(token) {
  return `admin_token=${encodeURIComponent(token)}; ${cookieOptions()}; Max-Age=${TOKEN_DAYS * 86400}`;
}

export function clearTokenCookie() {
  return `admin_token=; ${cookieOptions()}; Max-Age=0`;
}
