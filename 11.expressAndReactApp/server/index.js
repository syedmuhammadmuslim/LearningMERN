const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3000;

const posts = [
  { id: 1, title: "Title 1", content: "Content 1" },
  { id: 2, title: "Title 2", content: "Content 2" },
  { id: 3, title: "Title 3", content: "Content 3" },
];

// const posts = null;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send(posts);
});
