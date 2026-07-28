import { Router } from "express";
import sanitize from "sanitize-html";
import { writeFile, readFile, unlink } from "node:fs/promises";
import path from "node:path";

const router = Router();

router.post("/messages", async (req, res) => {
  const sanitizedMessage = sanitize(req.body.message);
  // console.log(req.body);
  const messageId = crypto.randomUUID();
  // console.log(messageId);

  const filePath = path.join(process.cwd(), "messages", `${messageId}.txt`);
  await writeFile(filePath, sanitizedMessage);

  res.render("success.html", { messageId });
});

router.get("/messages/:id", async (req, res) => {
  const { id } = req.params;
  // console.log("ID aus URL:", id);

  const filePath = path.join(process.cwd(), "messages", `${id}.txt`);
  // console.log("FilePath:", filePath);

  try {
    const message = await readFile(filePath, { encoding: "utf-8" });
    // console.log("Decoded message:", message);
    await unlink(filePath);
    // console.log("Deleting file:", filePath);
    res.render("detail.html", { message });
  } catch (error) {
    res.status(404).render("404.html");
    // console.log("Error message:", 404);
  }
});

export default router;
