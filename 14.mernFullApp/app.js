import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import usersRouter from "./05routers/usersRouter.js";
import postsRouter from "./05routers/postsRouter.js";
import authRouter from "./05routers/authRouter.js";

dotenv.config();
const app = express();
app.use(cookieParser());

const accessLogStream = fs.createWriteStream(path.join("logs", "access.log"), {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));

app.use(express.json());

const whitelist = ["http://localhost:5173"]; // whitelisted origins
app.use(
  cors({
    origin: whitelist,
    credentials: true,
  })
);
// app.use(morgan("dev"));
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my Express server");
});

export default app;
