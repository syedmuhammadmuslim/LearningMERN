import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
  title: String,
  content: String,
});

export const posts =
  mongoose.models.posts || mongoose.model("posts", postsSchema);
