import express from "express";

import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/usersController.js";
import {
  allUsersQueryParamsValidator,
  usersAuthenticator,
} from "../authenticators/usersAuthenticator.js";

const usersRouter = express.Router();

usersRouter
  .get("/", usersAuthenticator, allUsersQueryParamsValidator, getAllUsers)
  .get("/:id", getUserById)
  .post("/", createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

export default usersRouter;
