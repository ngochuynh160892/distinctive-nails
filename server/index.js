import path from "node:path";
import express from "express";
import { createApiApp, rootDir } from "./api.js";

const app = createApiApp();
const dist = path.join(rootDir, "dist");
app.use(express.static(dist));
app.use((req, res, next) => {
  if (req.method !== "GET") {
    next();
    return;
  }
  res.sendFile(path.join(dist, "index.html"));
});

const port = Number(process.env.PORT || 4173);
app.listen(port, () => {
  console.log(`Distinctive Nails running at http://localhost:${port}`);
  console.log(`Admin: http://localhost:${port}/admin.html`);
});
