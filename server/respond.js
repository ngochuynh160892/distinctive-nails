export function applyResult(res, result) {
  if (result.cookies) {
    res.setHeader("Set-Cookie", result.cookies);
  }
  res.status(result.status || 200).json(result.json ?? { ok: true });
}

export function vercelHandler(fn) {
  return async (req, res) => {
    try {
      const result = await fn(req);
      applyResult(res, result);
    } catch (err) {
      console.error(err);
      applyResult(res, {
        status: 500,
        json: { error: err.message || "Server error" },
      });
    }
  };
}
