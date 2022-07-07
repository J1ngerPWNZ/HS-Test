import {DataTypes, Model} from "sequelize";

import {sequelize} from "./sequelize.js";

export class Token extends Model {
}

Token.init(
    {
        token: {type: DataTypes.STRING},
    },
    {
        sequelize,
        modelName: "tokens",
    }
);
