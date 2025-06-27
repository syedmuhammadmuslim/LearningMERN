import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let db;

const client = new MongoClient(process.env.MONGO_URI);

export const connectDB = async () => {
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("Mongo DB connected");
  } catch (err) {
    console.error("Mongo connection failed", err);
    throw err;
  }
};

export const getDB = () =>
  db
    ? db
    : (() => {
        throw new Error("DB not initialized. Call connectDB() first.");
      })();

export const closeDB = () => {
  if (client) {
    client.close();
    console.log("MongoDB connection closed.");
  }
};
