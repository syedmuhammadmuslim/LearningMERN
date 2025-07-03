import mongoose from "mongoose";

const postsSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"] }, // For comment-posts, the title will be parentPostTitle - Comment
    content: { type: String, required: [true, "Content is required"] },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "A post must be created by a user"],
    },
    parentPost: { type: mongoose.Schema.Types.ObjectId, ref: "posts" },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "posts" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  },
  { timestamps: true }
);

export default mongoose.model("posts", postsSchema);
