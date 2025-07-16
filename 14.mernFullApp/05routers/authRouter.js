import express from "express";
import {
  registerUser,
  login,
  logout,
  profile,
} from "../02controllers/authController.js";
import { usersAuthenticator } from "../04authenticators/authenticators.js";

const authRouter = express.Router();
authRouter
  .get("/", usersAuthenticator, profile)
  .post("/register", registerUser)
  .post("/login", login)
  .post("/logout", logout);

export default authRouter;
