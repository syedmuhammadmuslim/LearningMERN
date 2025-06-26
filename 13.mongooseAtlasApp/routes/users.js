import express from "express";
import Users from "../models/userModel.js";

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
  });

export default router;
