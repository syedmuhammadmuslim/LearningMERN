import { connectToDB } from "@/lib/mongodb";
import { users } from "@/models/users";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { email, password } = await req.json();
  await connectToDB();

  const existing = await users.findOne({ email });
  if (existing)
    return Response.json({ message: "User exists" }, { status: 400 });

  const hashed = await bcrypt.hash(password, 10);
  const user = await users.create({ email, password: hashed });

  return Response.json({ message: "User Created", user });
};
