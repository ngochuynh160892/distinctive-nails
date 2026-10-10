import { createApiApp } from "./api.js";

export function contentApiPlugin() {
  const app = createApiApp();
  const handler = (req, res, next) => {
    if (req.url?.startsWith("/api/") || req.url?.startsWith("/uploads/")) {
      app(req, res, next);
      return;
    }
    next();
  };
  return {
    name: "content-api",
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}
