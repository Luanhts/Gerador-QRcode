import express from "express";
import qr from "qr-image";
import path from "path";

const app = express();

const port = 5000;

app.use(express.json());

app.post("/generate-qr", (req, res) => {
  const { url } = req.body;

  const qr_svg = qr.image(url, { type: "svg" });

  res.setHeader("Content-Type", "image/svg+xml");
  qr_svg.pipe(res);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
