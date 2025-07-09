import express from "express";

import usersController from "../02controllers/usersController.js";
import {
  authorize,
  usersAuthenticator,
} from "../04authenticators/authenticators.js";
import { allUsersQueryParamsValidator } from "../03validators/validators.js";

const usersRouter = express.Router();

usersRouter
  .get(
    "/",
    usersAuthenticator,
    authorize("read:users"),
    allUsersQueryParamsValidator,
    usersController.getAllUsers
  )
  .get(
    "/:id",
    usersAuthenticator,
    authorize("read:users"),
    usersController.getUserById
  )
  .put(
    "/:id",
    usersAuthenticator,
    authorize("update:users"),
    usersController.updateUser
  )
  .delete(
    "/:id",
    usersAuthenticator,
    authorize("delete:users"),
    usersController.deleteUser
  );

export default usersRouter;
