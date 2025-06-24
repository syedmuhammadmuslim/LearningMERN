// const express = require("express");
import express from "express";
const router = express.Router();

let users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Anas" },
];

router
  .get("/", (req, response) => {
    response.send("<h1>TEST</h1>");
  })
  .get("/:id", (req, res) => {
    const user = users.find((user) => user.id == req.params.id);
    //   user ? res.json(user) : res.status(404).send("User not found");
    res.send(user);
  })
  .post("/", (req, res) => {
    const { name } = req.body;
    users.push({ id: Date.now(), name });
    // res.redirect("/");
    res.send(users);
  });

// module.exports = router;
export default router;
