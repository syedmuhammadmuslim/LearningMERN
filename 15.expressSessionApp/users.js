import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  username: String,
  password: String, // We are not hashing passwords in this app just because we're focusing on express-session only
});

export default mongoose.model("users", usersSchema);
