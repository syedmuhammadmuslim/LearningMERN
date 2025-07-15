import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../app.js";

dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
  });
  console.log("MongoDB Connected");
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Posts API", () => {
  it("should return all posts", async () => {
    const res = await request(app)
      .get("/api/posts")
      .set("Authorization", process.env.AUTH);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  let testPostId;

  it("should create a post", async () => {
    const res = await request(app)
      .post("/api/posts")
      .send({
        title: "New Post 2",
        content: "New Content 2",
        author: "6867d055a27d0c00627475a0",
      })
      .set("Authorization", process.env.AUTH);
    testPostId = res.body._id;
    expect(res.statusCode).toEqual(200);
  });

  it("should update the created post", async () => {
    const res = await request(app)
      .put(`/api/posts/${testPostId}`)
      .send({
        title: "New Post 23",
        content: "New Content 23",
        author: "6867d055a27d0c00627475a0",
      })
      .set("Authorization", process.env.AUTH);
    expect(res.statusCode).toEqual(200);
  });

  it("should delete the created post", async () => {
    const res = await request(app)
      .delete(`/api/posts/${testPostId}`)
      .set("Authorization", process.env.AUTH);
    expect(res.statusCode).toEqual(200);
  });
});
