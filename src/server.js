const { ApolloServer } = require('apollo-server')
const modules = require('./modules')

const server = new ApolloServer({
    modules
})

server.listen(7000, console.log(7000 + '/graphql'))
