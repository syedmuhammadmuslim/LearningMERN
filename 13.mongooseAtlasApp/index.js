import express from "express";
import { connectMongoose } from "./db.js";
import userRoutes from "./routers/usersRouter.js";
import dotenv from "dotenv";

dotenv.config();
connectMongoose();

const app = express();
app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  // Root... Route...
  res.send("Welcome to my Express app");
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
