const graphql = require('graphql');
const users = require('./../users.json');
const resolvers = require('./../resolvers/resolvers');

const userType = require('./../models/userType');

let schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                type: userType,
                args: {
                    id: {
                        type: graphql.GraphQLInt
                    }
                },
                resolve: function (_ , args) {
					let response = users.find(function (user){
						return (user.id === args.id)
					})
					return response
				}
            }
        }
    })
})

module.exports = schema;