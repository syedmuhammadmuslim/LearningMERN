import express from "express";

import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  addLikeToPost,
} from "../02controllers/postsController.js";
import {
  authorize,
  usersAuthenticator,
} from "../04authenticators/authenticators.js";

const postsRouter = express.Router();

postsRouter
  .get("/", usersAuthenticator, authorize("read:posts"), getAllPosts)
  .get("/:id", usersAuthenticator, authorize("read:posts"), getPostById)
  .post("/", usersAuthenticator, authorize("create:posts"), createPost)
  .put("/:id", usersAuthenticator, authorize("update:posts"), updatePost)
  .delete("/:id", usersAuthenticator, authorize("delete:posts"), deletePost)
  .put(
    "/:id/like",
    usersAuthenticator,
    authorize("update:posts"),
    addLikeToPost
  );

export default postsRouter;
