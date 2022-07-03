const { gql } = require('apollo-server')

module.exports = gql` 
    type Restaurant{
        id: ID!
        name: String!
        catID: ID!
    }

    extend type Query{
        restaurants: [Restaurant]!
        filterRes(catID: ID!): [Restaurant]!
    }

    extend type Mutation{
        newRestaurant(name: String!, catID: ID!): Restaurant
        updateRestaurant( name: String!, id: ID!): Restaurant
        delRestaurant(id: ID!): String
    }
`