const graphql = require('graphql');

let knowledgeType = new graphql.GraphQLObjectType({
    name: 'Knowledge',
    fields: {
        language: { type: graphql.GraphQLString },
        frameworks: { type: new graphql.GraphQLList(graphql.GraphQLString) }
    }
})

module.exports = knowledgeType;