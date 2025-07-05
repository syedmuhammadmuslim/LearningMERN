import { usersModel } from "../models/usersModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const result = await usersModel
      .find(req.filter)
      .sort({ [req.sortBy]: req.order });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const result = await usersModel.findById(req.params.id);
    result
      ? res.status(200).json(result)
      : res.status(400).send("No such user in the DB");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const result = await usersModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    result
      ? res.status(200).json(result)
      : res.status(400).send("No such user in the DB");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const result = await usersModel.findByIdAndDelete(req.params.id);
    result
      ? res.status(200).json(result)
      : res.status(400).send("No such user in the DB");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
