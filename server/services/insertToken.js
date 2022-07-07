import { generateToken } from "./tokenServices.js";
import { Token } from "../db/Token.js";

export const insertToken = async () => {
  const token = generateToken();
  await Token.create({ token });
  return token;
};
