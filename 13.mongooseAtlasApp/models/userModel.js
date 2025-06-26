import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
