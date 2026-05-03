// pages/api/hello.ts
export default function handler(req, res) {
  res.status(200).json({
    status: "OK",
    message: "Hegay AI API is running",
    timestamp: new Date().toISOString(),
  });
}
