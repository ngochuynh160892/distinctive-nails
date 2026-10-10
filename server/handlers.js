import {
  clearTokenCookie,
  hashPassword,
  readToken,
  signToken,
  tokenCookie,
  verifyPassword,
  verifyToken,
} from "./auth.js";
import { getAuth, getContent, hasBlob, hasPostgres, saveUpload, setAuth, setContent } from "./store.js";

async function session(req) {
  const auth = await getAuth();
  if (!verifyToken(readToken(req.headers.cookie), auth)) return null;
  return auth;
}

export async function handleHealth() {
  return {
    status: 200,
    json: {
      database: hasPostgres() ? "postgres" : process.env.VERCEL ? "missing" : "local",
      files: hasBlob() ? "blob" : process.env.VERCEL ? "missing" : "local",
    },
  };
}

export async function handleGetContent() {
  return { status: 200, json: await getContent() };
}

export async function handleMe(req) {
  const auth = await session(req);
  return {
    status: 200,
    json: { authenticated: Boolean(auth), username: auth?.username || null },
  };
}

export async function handleLogin(req) {
  const auth = await getAuth();
  const username = String(req.body?.username || "");
  const password = String(req.body?.password || "");
  if (username !== auth.username || !verifyPassword(password, auth.salt, auth.hash)) {
    return { status: 401, json: { error: "Sai tài khoản hoặc mật khẩu" } };
  }
  return {
    status: 200,
    json: { ok: true, username: auth.username },
    cookies: tokenCookie(signToken(auth)),
  };
}

export async function handleLogout() {
  return { status: 200, json: { ok: true }, cookies: clearTokenCookie() };
}

export async function handlePutContent(req) {
  const auth = await session(req);
  if (!auth) return { status: 401, json: { error: "Unauthorized" } };
  if (!req.body || typeof req.body !== "object") {
    return { status: 400, json: { error: "Invalid content" } };
  }
  await setContent(req.body);
  return { status: 200, json: { ok: true } };
}

export async function handlePassword(req) {
  const auth = await session(req);
  if (!auth) return { status: 401, json: { error: "Unauthorized" } };
  const current = String(req.body?.current || "");
  const next = String(req.body?.next || "");
  if (next.length < 6) {
    return { status: 400, json: { error: "Mật khẩu mới cần ít nhất 6 ký tự" } };
  }
  if (!verifyPassword(current, auth.salt, auth.hash)) {
    return { status: 401, json: { error: "Mật khẩu hiện tại không đúng" } };
  }
  const { salt, hash } = hashPassword(next);
  const updated = { ...auth, salt, hash };
  await setAuth(updated);
  return {
    status: 200,
    json: { ok: true },
    cookies: tokenCookie(signToken(updated)),
  };
}

export async function handleUpload(req) {
  const auth = await session(req);
  if (!auth) return { status: 401, json: { error: "Unauthorized" } };
  if (!req.file) return { status: 400, json: { error: "No file uploaded" } };
  const { url } = await saveUpload(req.file.buffer, req.file.originalname, req.file.mimetype);
  return { status: 200, json: { url } };
}
