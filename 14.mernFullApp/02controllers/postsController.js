import postsModel from "../01models/postsModel.js";

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
    // const result = await postsModel.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    const post = await postsModel.findById(req.params.id);
    if (post.author._id.toString() === req.user._id.toString()) {
      Object.keys(req.body).forEach((key) => {
        post[key] = req.body[key];
      });
      const result = await post.save();
      result
        ? res.status(200).json(result)
        : res.status(400).send("No such post in the DB");
    } else {
      res.status(400).json({ error: "You are not allowed to edit this post" });
    }
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

export const addLikeToPost = async (req, res) => {
  try {
    const result = await postsModel.findById(req.params.id);
    if (result.likes.includes(req.user._id)) {
      result.likes = result.likes.filter((userId) => userId != req.user.id);
      await result.save();
      res.status(200).json(result);
    } else if (result) {
      result.likes.push(req.user._id);
      await result.save();
      res.status(200).json(result);
    } else {
      res.status(400).json({ error: "No post with the given ID" });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};
