import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectMongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log("Mongoose connected");
  } catch (err) {
    console.error("Mongoose connection error: ", err.message);
  }
};
