import express from "express";
import mongoose from "mongoose";
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

mongoose
  .connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME })
  .then(() => console.log("MongoDB Connected"))
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) =>
    console.log("MongoDB Error:\n", err.message, "\nAn error has occured")
  );

app.get("/", (req, res) => {
  res.send("Welcome to my Express server");
});
