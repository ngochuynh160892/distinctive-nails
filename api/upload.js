import { handleUpload } from "../server/handlers.js";
import { applyResult } from "../server/respond.js";
import { upload } from "../server/upload.js";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    applyResult(res, { status: 405, json: { error: "Method not allowed" } });
    return;
  }

  upload.single("file")(req, res, async (err) => {
    if (err) {
      applyResult(res, { status: 400, json: { error: err.message || "Upload failed" } });
      return;
    }
    try {
      applyResult(res, await handleUpload(req));
    } catch (error) {
      console.error(error);
      applyResult(res, {
        status: 500,
        json: { error: error.message || "Server error" },
      });
    }
  });
}
