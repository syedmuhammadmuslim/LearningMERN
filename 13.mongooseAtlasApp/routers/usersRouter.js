import express from "express";
import Users from "../models/usersModel.js";

const router = express.Router();

router
  .post("/users", async (req, res) => {
    try {
      const user = await Users.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  })
  .get("/users", async (req, res) => {
    try {
      const allUsers = await Users.find();
      res.status(200).json(allUsers);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  })
  .get("/users/:id", async (req, res) => {
    try {
      const user = await Users.findById(req.params.id);
      user ? res.status(200).json(user) : res.status(404).send("No such user");
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  })
  .put("/users/:id", async (req, res) => {
    try {
      const result = await Users.findByIdAndUpdate(req.params.id, req.body);
      result
        ? res.status(200).send(result)
        : res.status(404).send("No such user");
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  })
  .delete("/users/:id", async (req, res) => {
    try {
      const result = await Users.findByIdAndDelete(req.params.id);
      result
        ? res.status(200).json(result)
        : res.status(404).send("No such user");
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

export default router;
