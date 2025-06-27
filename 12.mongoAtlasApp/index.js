import express from "express";
import dotenv from "dotenv";
import { connectDB, closeDB } from "./db.js";
import usersRouter from "./routers/usersRouter.js";
import postsRouter from "./routers/postsRouter.js";

dotenv.config();
await connectDB();
const app = express();

app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server hosted at port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my express app");
});

process.on("SIGINT", () => {
  try {
    closeDB();
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    console.log("Closing the server now");
    process.exit(0);
  }
});
