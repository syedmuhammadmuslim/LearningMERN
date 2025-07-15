import express from "express";
import postsModel from "./models/postsModel.js";
import usersModel from "./models/usersModel.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server  running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err.message));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

app.get("/posts", async (req, res) => {
  const posts = await postsModel.find().populate("author", "name email");
  res.json(posts);
});

app
  .post("/users", async (req, res) => {
    const user = await usersModel.create(req.body);
    res.json(user);
  })
  .get("/users", async (req, res) => {
    const users = await usersModel.find();
    res.json(users);
  });

app
  .post("/posts", async (req, res) => {
    const { title, content, author } = req.body;
    const post = await postsModel.create({ title, content, author });
    res.json(post);
  })
  .get("/posts", async (req, res) => {
    const posts = await postsModel.find();
    res.json(posts);
  });

app.get("/top-authors", async (req, res) => {
  const authors = await postsModel.aggregate([
    {
      $group: {
        _id: "$author",
        totalPosts: { $sum: 1 },
      },
    },
    {
      $sort: { totalPosts: -1 },
    },
    { $limit: 2 },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "authorDetails",
      },
    },
    {
      $unwind: "$authorDetails",
    },
    {
      $project: {
        _id: 0,
        name: "$authorDetails.name",
        email: "$authorDetails.email",
        totalPosts: 1,
      },
    },
  ]);
  res.json(authors);
});
