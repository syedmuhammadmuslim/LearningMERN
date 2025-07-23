import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "HSMM";

export const signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    console.log(err);
    return null;
  }
};
