import express from "express";
import nunjucks from "nunjucks";

const app = express();

app.use(express.static("publicj"));

const port = 3001;

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
