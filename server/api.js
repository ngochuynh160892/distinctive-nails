import express from "express";
import {
  handleGetContent,
  handleHealth,
  handleLogin,
  handleLogout,
  handleMe,
  handlePassword,
  handlePutContent,
  handleUpload,
} from "./handlers.js";
import { applyResult } from "./respond.js";
import { uploadsDir } from "./store.js";
import { upload } from "./upload.js";
import { rootDir } from "./env.js";

export { rootDir, upload };

async function send(req, res, fn) {
  try {
    applyResult(res, await fn(req));
  } catch (err) {
    console.error(err);
    applyResult(res, {
      status: 500,
      json: { error: err.message || "Server error" },
    });
  }
}

export function createApiRouter() {
  const router = express.Router();
  router.use(express.json({ limit: "4mb" }));
  router.use((err, _req, res, next) => {
    if (err instanceof SyntaxError || err?.type === "entity.parse.failed") {
      res.status(400).json({ error: "Invalid JSON" });
      return;
    }
    next(err);
  });

  router.get("/health", (req, res) => send(req, res, handleHealth));
  router.get("/content", (req, res) => send(req, res, handleGetContent));
  router.get("/me", (req, res) => send(req, res, handleMe));
  router.post("/login", (req, res) => send(req, res, handleLogin));
  router.post("/logout", (req, res) => send(req, res, handleLogout));
  router.put("/content", (req, res) => send(req, res, handlePutContent));
  router.put("/password", (req, res) => send(req, res, handlePassword));
  router.post("/upload", (req, res) => {
    upload.single("file")(req, res, (err) => {
      if (err) {
        res.status(400).json({ error: err.message || "Upload failed" });
        return;
      }
      send(req, res, handleUpload);
    });
  });

  return router;
}

export function createApiApp() {
  const app = express();
  app.use("/api", createApiRouter());
  app.use("/uploads", express.static(uploadsDir));
  app.use((err, _req, res, next) => {
    if (res.headersSent) {
      next(err);
      return;
    }
    res.status(400).json({ error: err.message || "Request failed" });
  });
  return app;
}
