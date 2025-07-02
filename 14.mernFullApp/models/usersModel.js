import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/^\S+@\S+\.\S+$/, "Email is invalid"],
    },
    age: {
      type: Number,
      min: [0, "Age must be positive"],
      default: 18,
    },
  },
  { timestamps: true }
);

export const usersModel = mongoose.model("users", usersSchema);
