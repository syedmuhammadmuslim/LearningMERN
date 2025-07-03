import express from "express";

import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controller/postsController.js";
import { usersAuthenticator } from "../authenticators/usersAuthenticator.js";

const postsRouter = express.Router();

postsRouter
  .get("/", usersAuthenticator, getAllPosts)
  .get("/:id", usersAuthenticator, getPostById)
  .post("/", usersAuthenticator, createPost)
  .put("/:id", usersAuthenticator, updatePost)
  .delete("/:id", usersAuthenticator, deletePost);

export default postsRouter;
