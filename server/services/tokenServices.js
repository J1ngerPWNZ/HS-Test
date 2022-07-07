import jwt from "jsonwebtoken";
import { Token } from "../db/Token.js";

const privateKey = "secretKey";

export const generateToken = () =>
  jwt.sign({ userName: "someName" }, privateKey);

export const checkToken = async (token) => {
  try {
    if (!token) {
      throw new Error("Token must be provided");
    }

    jwt.verify(token, privateKey);
    const dbToken = Token.findOne({ where: { token } });

    return await dbToken;
  } catch (e) {
    throw new Error(e);
  }
};
