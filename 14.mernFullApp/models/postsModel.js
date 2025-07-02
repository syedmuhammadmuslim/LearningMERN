import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is required"] },
  content: { type: String, required: [true, "Content is required"] },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

export default mongoose.model("posts", postsSchema);
