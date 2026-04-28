import express from "express";
import nunjucks from "nunjucks";

const app = express();
const port = 3000;

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", (req, res) => {
  res.render("index.html", { title: "Home" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
