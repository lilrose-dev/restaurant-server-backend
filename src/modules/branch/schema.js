const { gql } = require('apollo-server')

module.exports = gql`
    type Branch{
        id: ID!
        name: String!
        resID: ID!
    }

    extend type Query{
        branches: [Branch]!
        filtBranches(resID: ID!): [Branch]!
    }

    extend type Mutation{
        newBranch(name: String!, resID: ID!): Branch
        updateBranch(name: String!, id: ID!): Branch
        delBranch(id: ID!): String
    }
`