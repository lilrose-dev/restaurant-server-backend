const { ApolloServer } = require('apollo-server')
const modules = require('./modules')
const PORT = process.env.PORT || 7000
console.log(process.env.PORT);
const server = new ApolloServer({
    modules
})

server.listen(PORT, console.log(PORT + '/graphql'))
