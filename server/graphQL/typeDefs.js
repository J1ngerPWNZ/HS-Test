export const typeDefs = `
input CommitsQueryInput {
    page: Int!
    per_page: Int!
}

type CommitterData {
  name:String!
  date:String!
}

type CommitData {
  message:String!
  committer:CommitterData!
}

type CommitData {
    commit:CommitData!
    sha:String!
    html_url:String!
}

type Query {
    commits(input:CommitsQueryInput!): [CommitData]
    hello:String!
}

type Mutation {
  generateToken:String!
}
`;
