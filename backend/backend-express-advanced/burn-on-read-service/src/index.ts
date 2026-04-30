import express from "express";
import nunjucks from "nunjucks";
import path from "node:path";
import { logger } from "./middleware/logger.js";
import { ensureLogFile } from "./middleware/logger.js";

const LOG_FILE = path.join(process.cwd(), "logs", "logs.txt");

const app = express();

app.use(express.static("public"));
app.use(express.json());

const port = process.env.PORT || "3000";

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", (req, res) => {
  res.render("index.html", {});
});

async function startServer() {
  await ensureLogFile(LOG_FILE);
  app.use(logger);
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

startServer();
