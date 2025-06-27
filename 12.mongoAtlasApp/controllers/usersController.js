import {
  getAllUsers,
  getOneUser,
  addUser,
  updateUser,
  deleteUser,
} from "../models/usersModel.js";

export const fetchAllUsers = async (req, res) => {
  const users = await getAllUsers();
  users.status == 1
    ? res.status(200).json(users.data)
    : res.status(400).send(users.error);
  // res.send("Users");
};

export const fetchOneUser = async (req, res) => {
  const user = await getOneUser(req.params.id);
  user.status == 1
    ? res.status(200).json(user.data)
    : res.status(400).send(user.error);
  // res.send("Users");
};

export const createUser = async (req, res) => {
  const newUser = req.body;
  const result = await addUser(newUser);
  result.status == 1
    ? res.status(200).json(result.result)
    : res.status(400).json(result.error);
};

export const modifyUser = async (req, res) => {
  const updatedUser = { id: req.params.id, data: req.body };
  const result = await updateUser(updatedUser);
  result.status == 1
    ? res.status(200).json(result.result)
    : res.status(400).json(result.error);
};

export const removeUser = async (req, res) => {
  const result = await deleteUser(req.params.id);
  result.status == 1
    ? res.status(200).json(result.result)
    : res.status(400).json(result.error);
};
