import express from "express";
import nunjucks from "nunjucks";
import { readFileSync } from "fs";

interface Post {
  title: string;
  image: string;
  author: string;
  createdAt: number;
  teaser: string;
  content: string;
}

const postsJson = readFileSync("src/posts.json", "utf-8");

const posts = JSON.parse(postsJson).map((post: Post) => ({
  ...post,
  createdAt: new Date(post.createdAt * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
}));

const app = express();

app.use(express.static("public"));

const port = 3001;

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", (req, res) => {
  res.render("index.html", { posts: posts });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
