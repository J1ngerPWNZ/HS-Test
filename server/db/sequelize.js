import {Sequelize} from "sequelize";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    host: "./db/db.sqlite",
});
