import express from "express";

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

type Bookmark = {
  id: number;
  url: string;
  title: string;
  tag?: string;
};

let bookmarks: Bookmark[] = [
  { id: 1, url: "https://expressjs.com", title: "Express.js", tag: "node" },
  {
    id: 2,
    url: "https://typescriptlang.org",
    title: "TypeScript",
    tag: "typescript",
  },
  { id: 3, url: "https://developer.mozilla.org", title: "MDN Web Docs" },
];

app.use(express.json());

app.get("/bookmarks", (req, res) => {
  const tag = req.query.tag;

  const filteredBookmarks = bookmarks.filter(
    (bookmark) => bookmark.tag === tag,
  );

  if (tag) {
    res.json(filteredBookmarks);
    return;
  }
  res.json(bookmarks);
});

app.get("/bookmarks/:id", (req, res) => {
  const id = Number(req.params.id);
  const bookmark = bookmarks.find((bookmark) => bookmark.id === id);

  if (!bookmark) {
    res.status(404).json({ message: `id ${id} not found.` });
    return;
  }

  res.json(bookmark);
});

app.post("/bookmarks", (req, res) => {
  const newBookmark = req.body;

  if (!newBookmark.url) {
    res.status(400).json({ error: `URL is missing` });
    return;
  }

  if (!newBookmark.title) {
    res.status(400).json({ error: `Title is missing` });
    return;
  }

  bookmarks.push({ ...newBookmark, id: bookmarks.length + 1 });

  res.status(201).json(newBookmark);
  return;
});

app.delete("/bookmarks/:id", (req, res) => {
  const bookmarkId = Number(req.params.id);
  bookmarks = bookmarks.filter((bookmark) => bookmark.id !== bookmarkId);
  res.status(204).send();
  return;
});

app.patch("/bookmarks/:id", (req, res) => {
  const id = Number(req.params.id);
  const bookmark = bookmarks.find((bookmark) => bookmark.id === id);

  if (!bookmark) {
    res.status(404).json({ message: `id ${id} not found.` });
    return;
  }

  const updatedBookmark = { ...bookmark, ...req.body };
  bookmarks = bookmarks.map((bookmark) =>
    bookmark.id === id ? updatedBookmark : bookmark,
  );

  res.status(200).json(updatedBookmark);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
