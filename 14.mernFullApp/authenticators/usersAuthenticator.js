import joi from "joi";
import jwt from "jsonwebtoken";
import { usersModel } from "../models/usersModel.js";

export const usersAuthenticator = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(400).json({ error: "Unauthorized" });
  } else {
    try {
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await usersModel.findById(decodedUser.id).select("-password");
      console.log(decodedUser);
      next();
    } catch (err) {
      console.log("This block has caught an error");
      res.status(400).json({ error: err.message });
    }
  }
};

export const allUsersQueryParamsValidator = (req, res, next) => {
  const schema = joi.object({
    minAge: joi.number().min(0).max(120).default(0),
    sortBy: joi.string().valid("name", "age", "createdAt").default("createdAt"),
    order: joi.string().valid("asc", "desc").default("asc"),
  });

  const { error, value } = schema.validate(req.query);
  if (error) {
    res.status(400).json({ error: error });
  } else {
    req.filter = { age: { $gte: value.minAge } };
    req.sortBy = value.sortBy;
    req.order = value.order === "asc" ? 1 : -1;
    next();
  }
};
