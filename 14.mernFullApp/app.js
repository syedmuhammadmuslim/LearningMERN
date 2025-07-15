import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRouter from "./05routers/usersRouter.js";
import postsRouter from "./05routers/postsRouter.js";
import authRouter from "./05routers/authRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my Express server");
});

export default app;
