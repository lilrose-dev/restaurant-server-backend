const model = require('./model')

module.exports = {
    Query: {
        categories: async() => await model.category() 
    },

    Mutation: {
        newCategory: async(_, {name}) => {
            return await model.newCategory(name)
        },
        updateCategory: async(_, { name, id}) => {
            return await model.updateCategory( name, id)
        },
        delCategory: async(_, {id}) => {
            await model.delCategory(id)
            return "Category is deleted"
        }
    },
    
    Category: {
        id: (global) => global.category_id,
        name: (global) => global.category_name
    }
}