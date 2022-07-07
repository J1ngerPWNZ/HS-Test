import {graphqlHTTP} from "express-graphql";
import expressPlayground from "graphql-playground-middleware-express";
import {executableSchema} from "./schema.js";
import {checkToken} from "../services/tokenServices.js";

export function graphQlApp(app) {
    const schema = executableSchema();

    app.use(
        "/graphql",
        graphqlHTTP(({headers: {authorization}}, res) => ({
            schema: schema,
            graphiql: true,
            context: async () => ({
                isAuthorized: await checkToken(authorization),
            }),
            customFormatErrorFn: (err) => err.message,
        }))
    );

    app.get("/playground", expressPlayground.default({endpoint: "/graphql"}));
}
