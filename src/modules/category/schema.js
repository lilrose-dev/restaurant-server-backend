const { gql } = require('apollo-server')

module.exports = gql`
    type Category {
        id: ID!
        name: String!
    }

    type Query{
        categories: [Category]!
    }

    type Mutation{
        newCategory(name: String!):Category
        updateCategory(name: String!, id: ID!): Category
        delCategory(id: ID!): String
    }

`