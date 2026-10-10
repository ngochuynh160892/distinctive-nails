import { handlePassword } from "../server/handlers.js";
import { vercelHandler } from "../server/respond.js";

export default vercelHandler(async (req) => {
  if (req.method !== "PUT") return { status: 405, json: { error: "Method not allowed" } };
  return handlePassword(req);
});
