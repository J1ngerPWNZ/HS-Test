import getSourceData from "../services/getSourceData.js";
import {insertToken} from "../services/insertToken.js";

const queriesResolvers = {
    Query: {
        commits: async (root, args, context) => {
            const {isAuthorized} = await context();
            if (!!isAuthorized) {
                const {
                    input: {page, per_page},
                } = args;

                const source = await getSourceData({page, per_page});
                return source;
            }
        },
        hello: () => "hello world",
    },
};

const mutationsResolvers = {
    Mutation: {
        generateToken: async (_, args, context) => {
            const {isAuthorized} = await context();
            if (!!isAuthorized) {
                const token = await insertToken();
                return token;
            }
        },
    },
};

export const resolvers = {
    ...queriesResolvers,
    ...mutationsResolvers,
};
