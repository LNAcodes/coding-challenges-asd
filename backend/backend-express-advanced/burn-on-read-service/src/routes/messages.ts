import { Router } from "express";
import sanitize from "sanitize-html";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { readFile } from "node:fs/promises";

const router = Router();

router.post("/messages", async (req, res) => {
  const sanitizedMessage = sanitize(req.body.message);
  console.log(req.body);
  const messageId = crypto.randomUUID();
  console.log(messageId);

  const filePath = path.join(process.cwd(), "messages", `${messageId}.txt`);
  await writeFile(filePath, sanitizedMessage);

  res.render("success.html", { messageId });
});

router.get("/messages/:id", async (req, res) => {
  const { id } = req.params;
  // console.log("ID aus URL:", id);

  const filePath = path.join(process.cwd(), "messages", `${id}.txt`);
  // console.log("FilePath:", filePath);

  const message = await readFile(filePath, { encoding: "utf-8" });
  // console.log("Decoded message:", message);
  res.render("detail.html", { message });
});

export default router;
