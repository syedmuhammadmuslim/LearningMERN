import usersModel from "../01models/usersModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (user) => {
  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "7d",
  });
  console.log(token);
  return token;
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, age, password, role, permissions } = req.body;
    const exists = await usersModel.findOne({ email });
    if (exists) {
      res
        .status(400)
        .json({ message: "User with this email address aleardy exists" });
    } else {
      const user = await usersModel.create({ name, email, age, password, role, permissions });
      res.status(201).json({
        user: { id: user._id, name: user.name },
        token: generateToken(user),
      });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usersModel.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      console.log(user.matchPassword(password));
      res.status(200).json({
        user: { id: user._id, name: user.name },
        message: "Login successful",
        token: generateToken(user),
      });
    } else {
      res.status(400).json({ error: "Invalid email or password" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
