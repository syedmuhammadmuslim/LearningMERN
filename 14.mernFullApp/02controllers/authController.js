import usersModel from "../01models/usersModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (user) => {
  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "7d",
  });
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
      const user = await usersModel.create({
        name,
        email,
        age,
        password,
        role,
        permissions,
      });
      res
        .cookie("token", generateToken(user), {
          httpOnly: true,
          secure: false, // set to true in production with HTTPS
          sameSite: "Strict",
          maxAge: 60 * 60 * 1000, // 1 hour
        })
        .status(201)
        .json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            age: user.age,
            role: user.role,
          },
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
      res
        .cookie("token", generateToken(user), {
          httpOnly: true,
          secure: false, // set to true in production with HTTPS
          sameSite: "Strict",
          maxAge: 60 * 60 * 1000, // 1 hour
        })
        .status(200)
        .json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            age: user.age,
            role: user.role,
          },
          message: "Login successful",
        });
    } else {
      res.status(400).json({ error: "Invalid email or password" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

export const profile = (req, res) => {
  res.json(req.user);
};
