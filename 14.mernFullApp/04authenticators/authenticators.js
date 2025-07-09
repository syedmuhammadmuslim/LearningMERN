import jwt from "jsonwebtoken";
import usersModel from "../01models/usersModel.js";

export const usersAuthenticator = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(400).json({ error: "Unauthorized - No auth token provided" });
  } else {
    try {
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedUser);
      req.user = await usersModel.findById(decodedUser.id).select("-password");
      next();
    } catch (err) {
      console.log("Unauthorized - Invalid auth token");
      res.status(400).json({ error: err.message });
    }
  }
};

export const authorize = (requestedPermission) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user) {
      res.status(400).json({ error: "Unauthorized - User invalid" });
    } else if (user.role === "admin" || user.permissions.includes("*")) {
      next();
    } else if (
      user.role === "user" &&
      user.permissions.includes(requestedPermission)
    ) {
      next();
    } else {
      res.status(400).json({ error: "Unauthorized - Access forbidden" });
    }
  };
};
