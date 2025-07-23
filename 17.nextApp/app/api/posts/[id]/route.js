import { connectToDB } from "@/lib/mongodb";
import { posts } from "@/models/posts";

export const GET = async (req, { params }) => {
  await connectToDB();
  const thisPost = await posts.findById(params.id);
  return Response.json(thisPost);
};

export const PUT = async (req, { params }) => {
  await connectToDB();
  const { title, content } = await req.json();
  const updatedPost = posts.findByIdAndUpdate(
    params.id,
    { title, content },
    { new: true }
  );
  return Response.json(updatedPost, { status: 200 });
};

export const DELETE = async (req, { params }) => {
  await connectToDB();
  await posts.findByIdAndDelete(params.id);
  return new Response(null, { message: "Deleted", status: 200 });
};
