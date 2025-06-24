// const express = require("express");
import express from "express";
const router = express.Router();

let users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Anas" },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  user ? "" : res.status(404).send("User not found");
  res.json(user);
});

// module.exports = router;
export default router;
