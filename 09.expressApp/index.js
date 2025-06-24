// const express = require("express");
import express from "express";
import { body, param, validationResult } from "express-validator";
const app = express();
const PORT = 3000;

let users = [
  { id: "1", name: "Muhammad" },
  { id: "2", name: "Muslim" },
];

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to Express API!</h1><p><i>This paragraph is included in my response</i></p>"
  );
});

app.get("/users", (req, res) => {
  //   res.send("All the users will be listed on this page.");
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  // res.send(`User ID is ${req.params.id}`);
  const user = users.find((user) => user.id === req.params.id);
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  q
    ? res.send(`You search for the query ${q}`)
    : res.send("You didn't search for anything");
});

// create new user
// app.post("/users", (req, res) => {
//   const { name } = req.body;
//   const newUser = { id: Date.now(), name };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// create new user with validation
// const { body, param, validationResult } = require("express-validator");
const nameValidator = body("name")
  .isAlpha()
  .withMessage("Name must contain only letters");

app.post("/users", nameValidator, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  const { name } = req.body;
  const newUser = { id: Date.now(), name };
  users.push(newUser);
  res.status(201).json(newUser);
});
