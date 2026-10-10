import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomBytes } from "node:crypto";
import { createRequire } from "node:module";
import { neon } from "@neondatabase/serverless";
import { put } from "@vercel/blob";
import { DEFAULT_PASSWORD, DEFAULT_USER, hashPassword } from "./auth.js";
import { loadEnv, rootDir } from "./env.js";

const require = createRequire(import.meta.url);
const defaultContent = require("../data/content.json");

loadEnv();

export const dataDir = path.join(rootDir, "data");
export const contentPath = path.join(dataDir, "content.json");
export const authPath = path.join(dataDir, "auth.json");
export const uploadsDir = path.join(dataDir, "uploads");

const ALLOWED_EXT = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];

function postgresUrl() {
  return process.env.POSTGRES_URL || process.env.DATABASE_URL || "";
}

export function hasPostgres() {
  return Boolean(postgresUrl());
}

export function hasBlob() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function getSql() {
  const url = postgresUrl();
  if (!url) return null;
  return neon(url, { fetchOptions: { cache: "no-store" } });
}

let schemaReady = false;

async function db(text, params) {
  const sql = getSql();
  if (!schemaReady) {
    await sql.query(`
      CREATE TABLE IF NOT EXISTS site_content (
        id INTEGER PRIMARY KEY,
        data JSONB NOT NULL,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);
    await sql.query(`
      CREATE TABLE IF NOT EXISTS site_auth (
        username TEXT PRIMARY KEY,
        salt TEXT NOT NULL,
        hash TEXT NOT NULL,
        secret TEXT NOT NULL,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);
    schemaReady = true;
  }
  return sql.query(text, params);
}

function ensureLocalDirs() {
  mkdirSync(dataDir, { recursive: true });
  mkdirSync(uploadsDir, { recursive: true });
}

function parseContent(data) {
  if (typeof data === "string") {
    try {
      return JSON.parse(data);
    } catch {
      return defaultContent;
    }
  }
  return data;
}

function readJson(file, fallback) {
  try {
    return JSON.parse(readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function defaultAuth() {
  const { salt, hash } = hashPassword(process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD);
  return {
    username: process.env.ADMIN_USER || DEFAULT_USER,
    salt,
    hash,
    secret: randomBytes(32).toString("hex"),
  };
}

export async function getContent() {
  if (hasPostgres()) {
    const rows = await db("SELECT data FROM site_content WHERE id = 1");
    if (rows[0]?.data) return parseContent(rows[0].data);
    await db(
      `INSERT INTO site_content (id, data, updated_at)
       VALUES (1, $1::jsonb, NOW())
       ON CONFLICT (id) DO NOTHING`,
      [JSON.stringify(defaultContent)]
    );
    return defaultContent;
  }

  if (process.env.VERCEL) {
    throw new Error("Missing POSTGRES_URL. Add Vercel Postgres in the project Storage tab.");
  }

  ensureLocalDirs();
  return readJson(contentPath, defaultContent);
}

export async function setContent(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid content");
  }

  if (hasPostgres()) {
    await db(
      `INSERT INTO site_content (id, data, updated_at)
       VALUES (1, $1::jsonb, NOW())
       ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()`,
      [JSON.stringify(data)]
    );
    return;
  }

  if (process.env.VERCEL) {
    throw new Error("Missing POSTGRES_URL. Add Vercel Postgres in the project Storage tab.");
  }

  ensureLocalDirs();
  writeFileSync(contentPath, JSON.stringify(data, null, 2));
}

export async function getAuth() {
  if (hasPostgres()) {
    const rows = await db("SELECT username, salt, hash, secret FROM site_auth LIMIT 1");
    if (rows[0]) return rows[0];
    const auth = defaultAuth();
    await db(
      `INSERT INTO site_auth (username, salt, hash, secret, updated_at)
       VALUES ($1, $2, $3, $4, NOW())
       ON CONFLICT (username) DO NOTHING`,
      [auth.username, auth.salt, auth.hash, auth.secret]
    );
    return auth;
  }

  if (process.env.VERCEL) {
    throw new Error("Missing POSTGRES_URL. Add Vercel Postgres in the project Storage tab.");
  }

  ensureLocalDirs();
  if (!existsSync(authPath)) {
    const auth = defaultAuth();
    writeFileSync(authPath, JSON.stringify(auth, null, 2));
    return auth;
  }
  return readJson(authPath, defaultAuth());
}

export async function setAuth(auth) {
  if (hasPostgres()) {
    await db("DELETE FROM site_auth");
    await db(
      `INSERT INTO site_auth (username, salt, hash, secret, updated_at)
       VALUES ($1, $2, $3, $4, NOW())`,
      [auth.username, auth.salt, auth.hash, auth.secret]
    );
    return;
  }

  if (process.env.VERCEL) {
    throw new Error("Missing POSTGRES_URL. Add Vercel Postgres in the project Storage tab.");
  }

  ensureLocalDirs();
  writeFileSync(authPath, JSON.stringify(auth, null, 2));
}

export async function saveUpload(buffer, originalName, mimeType) {
  const ext = path.extname(originalName || "").toLowerCase() || ".jpg";
  const safeExt = ALLOWED_EXT.includes(ext) ? ext : ".jpg";
  const name = `${Date.now()}-${randomBytes(4).toString("hex")}${safeExt}`;
  const contentType = mimeType && mimeType.startsWith("image/") ? mimeType : "image/jpeg";

  if (hasBlob()) {
    const blob = await put(`uploads/${name}`, buffer, {
      access: "public",
      contentType,
      addRandomSuffix: false,
    });
    return { url: blob.url };
  }

  if (process.env.VERCEL) {
    throw new Error("Missing BLOB_READ_WRITE_TOKEN. Add Vercel Blob in the project Storage tab.");
  }

  ensureLocalDirs();
  await mkdir(uploadsDir, { recursive: true });
  await writeFile(path.join(uploadsDir, name), buffer);
  return { url: `/uploads/${name}` };
}
