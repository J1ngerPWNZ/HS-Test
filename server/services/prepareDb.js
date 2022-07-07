import { Token } from "../db/Token.js";
import { sequelize } from "../db/sequelize.js";
import { insertToken } from "./insertToken.js";

export const prepareDb = async () => {
  await sequelize.sync().then(() => console.log("db is ready"));
  const exisingTokens = await Token.findAll();

  if (!exisingTokens.length) {
    //NOTE: Need this to insert first token to use API id DB is empty (VS)
    const token = await insertToken();
    console.log("Inserted first token --->", token);
  }
};
