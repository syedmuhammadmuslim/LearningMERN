import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Email is invalid"],
    },
    age: {
      type: Number,
      min: [0, "Age must be positive"],
      default: 18,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      // match: [
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{8,}$/,
      //   "Password must contain at least an uppercase, a lowercase, a special character, and a number",
      // ],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    permissions: {
      type: [String],
      default: [
        "create:posts",
        "read:posts",
        "update:posts",
        "delete:posts",
        "create:comments",
        "read:comments",
        "update:comments",
        "delete:comments",
      ],
    },
  },
  { timestamps: true }
);

usersSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

usersSchema.methods.matchPassword = async function (submittedPassword) {
  return await bcrypt.compare(submittedPassword, this.password);
};

export default mongoose.model("users", usersSchema);
