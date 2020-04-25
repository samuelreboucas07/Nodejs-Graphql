const express = require('express');
const cors = require('cors');
const expressGraphql = require("express-graphql");
const { buildSchema } = require("graphql");
const users = require('./schema/schema');
const graphqlHTTP = require('express-graphql')

const app = express();
app.use(cors());

app.use(express.json());

app.use('/user', graphqlHTTP({schema: users, pretty: true, graphiql: true}))

app.listen(3333, () => {
    console.log("Servidor em execução na porta 3333.");
});