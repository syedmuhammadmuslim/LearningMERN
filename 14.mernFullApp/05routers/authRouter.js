import express from "express";
import { registerUser, login } from "../02controllers/authController.js";

const authRouter = express.Router();
authRouter.post("/register", registerUser).post("/login", login);

export default authRouter;
