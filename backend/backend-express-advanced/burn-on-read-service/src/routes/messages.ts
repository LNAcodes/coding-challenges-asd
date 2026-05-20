import { Router } from "express";
import sanitize from "sanitize-html";

const router = Router();

router.post("/messages", (req, res) => {
  const sanitizedMessage = sanitize(req.body.message);
  console.log(req.body);
  res.send("ok");
});

export default router;
