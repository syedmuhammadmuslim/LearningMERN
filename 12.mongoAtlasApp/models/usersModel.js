import { getDB } from "../db.js";
import { ObjectId } from "mongodb";

export const getAllUsers = async () => {
  try {
    const db = await getDB();
    return { status: 1, data: await db.collection("users").find().toArray() };
  } catch (err) {
    return { status: 0, error: err.message };
  }
};

export const getOneUser = async (id) => {
  try {
    const db = await getDB();
    return {
      status: 1,
      data: await db
        .collection("users")
        .findOne({ _id: ObjectId.createFromHexString(id) }),
    };
  } catch (err) {
    return { status: 0, error: err.message };
  }
};

export const addUser = async (user) => {
  try {
    const db = await getDB();
    return { status: 1, result: await db.collection("users").insertOne(user) };
  } catch (err) {
    return { status: 0, error: err.message };
  }
};

export const updateUser = async (user) => {
  try {
    const db = await getDB();
    return {
      status: 1,
      result: await db
        .collection("users")
        .updateOne(
          { _id: ObjectId.createFromHexString(user.id) },
          { $set: user.data }
        ),
    };
  } catch (err) {
    console.log("error");
    return { status: 0, error: err.message };
  }
};

export const deleteUser = async (id) => {
  try {
    const db = await getDB();
    return {
      status: 1,
      result: await db
        .collection("users")
        .deleteOne({ _id: ObjectId.createFromHexString(id) }),
    };
  } catch (err) {
    console.error(err);
    return { status: 0, error: err.message };
  }
};
