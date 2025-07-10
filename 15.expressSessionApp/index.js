import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./users.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error: ", err));

app.use(
  session({
    name: "user_sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
      ttl: 60 * 60, // in seconds
    }),
    cookie: {
      maxAge: 1000 * 60 * 60, // in milli-seconds
      httpOnly: true, // cannot be accessed with JS code on browser
      secure: false, // because we're not working with https for now
    },
  })
);

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && user.password === password) {
      req.session.userId = user._id;
      res.status(200).json("Logged in successfully");
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    res.status(400).json({ error: "No credentials provided" });
  }
});

app.post("/logout", async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({
          message: "Logout error: ",
          error: err.message,
        });
      }
      res.clearCookie("user_sid");
      res.status(200).json({ message: "Logged out" });
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on localhost:${process.env.PORT}`);
});

const authenticator = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(400).json({ error: "Access forbidden" });
  }
};

app.get("/", authenticator, (req, res) => {
  res.status(200).send("Welcome to my Express-Session Server");
});
