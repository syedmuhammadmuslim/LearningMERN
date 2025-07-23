import { connectToDB } from "@/lib/mongodb";
import { users } from "@/models/users";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export const POST = async (req) => {
  const { email, password } = await req.json();
  await connectToDB();

  const user = await users.findOne({ email });
  if (!user) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return Response.json({ message: "Invalid password" }, { status: 404 });

  const token = signToken({ userId: user._id, email: user.email });

  return new Response(JSON.stringify({ message: "Login successful" }), {
    status: 200,
    headers: {
      "Set-Cookie": `token=${token}; HttpOnly;Path=/;Max-Age=604800`,
      "Content-Type": "application/json",
    },
  });
};
