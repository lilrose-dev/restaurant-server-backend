const { gql } = require('apollo-server')

module.exports = gql`
    type Food{
        id: ID!
        name: String!
        branchID: ID!
        price: Int!
    }

    extend type Query{
        food: [Food]!
        filterFood(branchID: ID!):[Food]
    }


    extend type Mutation{
        newFood(name: String!, branchID: ID!, price: Int!):Food
        updateFood(name: String!, price: Int!, id: ID!): Food
        delFood(id: ID!): String
    }
`