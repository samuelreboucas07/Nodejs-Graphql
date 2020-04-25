const users = require('./../users.json');

const resolvers = {
    getUser({ id }){
        let response = users.find(function (user){
            return (user.id === args.id)
        })
        return response
    }
}

module.exports = resolvers;