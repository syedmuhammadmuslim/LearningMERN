import { getDB } from "../db.js";
import { ObjectId } from "mongodb";

export const getAllPosts = async () => {
  try {
    const db = await getDB();
    return { status: 1, data: await db.collection("posts").find().toArray() };
  } catch (err) {
    return { status: 0, error: err.message };
  }
};

export const getOnePost = async (id) => {
  try {
    const db = await getDB();
    return {
      status: 1,
      data: await db
        .collection("posts")
        .findOne({ _id: ObjectId.createFromHexString(id) }),
    };
  } catch (err) {
    return { status: 0, error: err.message };
  }
};

export const addPost = async (post) => {
  try {
    const db = await getDB();
    return { status: 1, result: await db.collection("posts").insertOne(post) };
  } catch (err) {
    return { status: 0, error: err.message };
  }
};

export const updatePost = async (post) => {
  try {
    const db = await getDB();
    return {
      status: 1,
      result: await db
        .collection("posts")
        .updateOne(
          { _id: ObjectId.createFromHexString(post.id) },
          { $set: post.data }
        ),
    };
  } catch (err) {
    console.log("error");
    return { status: 0, error: err.message };
  }
};

export const deletePost = async (id) => {
  try {
    const db = await getDB();
    return {
      status: 1,
      result: await db
        .collection("posts")
        .deleteOne({ _id: ObjectId.createFromHexString(id) }),
    };
  } catch (err) {
    console.error(err);
    return { status: 0, error: err.message };
  }
};
