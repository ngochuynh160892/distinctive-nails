import { createRequire } from "node:module";
import { getContent, hasPostgres, setContent } from "./store.js";

const require = createRequire(import.meta.url);
const defaultContent = require("../data/content.json");

if (!hasPostgres()) {
  console.error("Set POSTGRES_URL or DATABASE_URL before seeding.");
  process.exit(1);
}

const existing = await getContent();
const force = process.argv.includes("--force");
if (existing?.site?.brandName && !force) {
  console.log("Database already has content. Re-run with --force to overwrite from data/content.json.");
  process.exit(0);
}

await setContent(defaultContent);
console.log("Seeded site content into Postgres.");
