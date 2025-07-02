import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRouter from "./routers/usersRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/users", usersRouter);

mongoose
  .connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) =>
    console.log("MongoDB Error:\n", err.message, "\nAn error has occured")
  );

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

app.get("/", (req, res) => {
  res.send("Welcome to my Express server");
});
