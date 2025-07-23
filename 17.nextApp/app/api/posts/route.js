import { connectToDB } from "@/lib/mongodb";
import { posts } from "@/models/posts";

export const GET = async (req) => {
  await connectToDB();
  const allPosts = await posts.find();
  return Response.json(allPosts);
};

export const POST = async (req) => {
  await connectToDB();
  const { title, content } = await req.json();
  const newPost = await posts.create({ title, content });
  return Response.json(newPost, { status: 200 });
};
