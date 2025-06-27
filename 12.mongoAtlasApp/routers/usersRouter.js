import express from "express";
import {
  fetchAllUsers,
  fetchOneUser,
  createUser,
  modifyUser,
  removeUser,
} from "../controllers/usersController.js";

const router = express.Router();

router
  .get("/", fetchAllUsers)
  .get("/:id", fetchOneUser)
  .post("/", createUser)
  .put("/:id", modifyUser)
  .delete("/:id", removeUser);

export default router;
