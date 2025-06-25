const express = require("express");
const router = express.Router();
const posts = require("../models/posts");

// View all posts
router.get("/", (req, res) => {
  res.render("blogs", { title: "All posts", posts: posts });
  // res.json(posts);
  // res.send(posts);
});

// Add a new post form
router.get("/new", (req, res) => {
  //   console.log("/newpost");
  res.render("new", { title: "Create a new post" });
});

// View a single post
router.get("/:id", (req, res) => {
  const post = posts.find((p) => p.id == req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.render("post", { title: post.title, post });
});

// Handle form submission
router.post("/new", (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.redirect("/blogs");
});

module.exports = router;
