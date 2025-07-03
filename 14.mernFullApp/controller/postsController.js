import postsModel from "../models/postsModel.js";

export const createPost = async (req, res) => {
  try {
    const result = await postsModel.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const result = await postsModel
      .find()
      .populate("author", "name email")
      .populate("comments", "title content");
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getPostById = async (req, res) => {
  try {
    const result = await postsModel
      .findById(req.params.id)
      .populate("author", "name email")
      .populate("comments", "title content");
    result
      ? res.status(200).json(result)
      : res.status(400).send("No such post in the DB");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const updatePost = async (req, res) => {
  try {
    const result = await postsModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    result
      ? res.status(200).json(result)
      : res.status(400).send("No such post in the DB");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    const result = await postsModel.findByIdAndDelete(req.params.id);
    result
      ? res.status(200).json(result)
      : res.status(400).send("No such post in the DB");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
