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
  .get("/:id", usersAuthenticator, getUserById)
  .post("/", usersAuthenticator, createUser)
  .put("/:id", usersAuthenticator, updateUser)
  .delete("/:id", usersAuthenticator, deleteUser);

export default usersRouter;
