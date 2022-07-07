import { graphQlApp } from "./graphQL/graphqlApp.js";
import express from "express";
import cors from "cors";
import { prepareDb } from "./services/prepareDb.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

prepareDb();
graphQlApp(app);

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`);
});
