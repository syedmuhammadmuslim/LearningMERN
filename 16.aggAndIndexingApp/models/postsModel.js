import mongoose from "mongoose";

const postsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

export default mongoose.model("posts", postsSchema);
