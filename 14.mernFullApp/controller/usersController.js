import { usersModel } from "../models/usersModel.js";

export const createUser = async (req, res) => {
  try {
    const result = await usersModel.create(req.body);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const result = await usersModel.find();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const result = await usersModel.findById(req.params.id);
    return result
      ? res.status(200).json(result)
      : res.status(400).send("No such user in the DB");
  } catch (err) {
    return res.status(400).send(err.message);
  }
};
