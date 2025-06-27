import {
  getAllPosts,
  getOnePost,
  addPost,
  updatePost,
  deletePost,
} from "../models/postsModel.js";

export const fetchAllPosts = async (req, res) => {
  const posts = await getAllPosts();
  posts.status == 1
    ? res.status(200).json(posts.data)
    : res.status(400).send(posts.error);
};

export const fetchOnePost = async (req, res) => {
  const post = await getOnePost(req.params.id);
  post.status == 1
    ? res.status(200).json(post.data)
    : res.status(400).send(posts.error);
};

export const createPost = async (req, res) => {
  const newPost = req.body;
  const result = await addPost(newPost);
  result.status == 1
    ? res.status(200).json(result.result)
    : res.status(400).json(result.error);
};

export const modifyPost = async (req, res) => {
  const updatedPost = { id: req.params.id, data: req.body };
  const result = await updatePost(updatedPost);
  result.status == 1
    ? res.status(200).json(result.result)
    : res.status(400).json(result.error);
};

export const removePost = async (req, res) => {
  const result = await deletePost(req.params.id);
  result.status == 1
    ? res.status(200).json(result.result)
    : res.status(400).json(result.error);
};
