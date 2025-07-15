import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  role: { type: String, default: "author" },
});

export default mongoose.model("users", usersSchema);
