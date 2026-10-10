import { handleGetContent, handlePutContent } from "../server/handlers.js";
import { vercelHandler } from "../server/respond.js";

export default vercelHandler(async (req) => {
  if (req.method === "GET") return handleGetContent();
  if (req.method === "PUT") return handlePutContent(req);
  return { status: 405, json: { error: "Method not allowed" } };
});
