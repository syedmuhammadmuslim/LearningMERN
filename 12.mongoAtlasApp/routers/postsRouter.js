import express from "express";
import {
  fetchAllPosts,
  fetchOnePost,
  createPost,
  modifyPost,
  removePost,
} from "../controllers/postsController.js";

const router = express.Router();

router
  .get("/", fetchAllPosts)
  .get("/:id", fetchOnePost)
  .post("/", createPost)
  .put("/:id", modifyPost)
  .delete("/:id", removePost);

export default router;
