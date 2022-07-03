const {gql} = require('apollo-server')

module.exports = gql`
    type Order{
        id: ID!
        userName: String!
        location: String!
        phone: Int!
        foodName: String!
        price: Int!
        count: Int!
        
    }

    extend type Query{
        orders: [Order]!
    }

    extend type Mutation{
        newOrder(userName: String!, location: String!, phone: Int!,foodName: String!, price: Int!, count: Int!): Order
        delOrder(id: ID!): String
    }
`