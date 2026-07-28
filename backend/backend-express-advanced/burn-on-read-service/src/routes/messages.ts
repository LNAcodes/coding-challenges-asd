import { Router } from "express";
import sanitize from "sanitize-html";
import { writeFile } from "node:fs/promises";
import path from "node:path";

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

export default router;
