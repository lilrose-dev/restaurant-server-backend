const model = require('./model')
const branchModel = require('../branch/model')

module.exports = {

    Query: {
        food: async() => await model.food(),
        filterFood: async(_, {branchID}) => {
            const food = await model.filterFood(Number(branchID))
            return food
        }
    },

    Mutation: {
        newFood: async(_, {name, branchID, price}) => {
            const createFood = await model.newFood(name, branchID, price)
            return createFood
        },
        updateFood: async(_, {name, price ,id}) => {
            await model.updateFood(name, price, id)
            return 'Food is updated'
        },
        delFood: async(_, {id}) => {
            await model.delFood(id)
            return 'Food is deleted'
        }

    },
    Food: {
        id: (global) => global.food_id,
        name: (global) => global.food_name,
        branchID: (global) => global.branch_id,
        price: (global) => global.food_price
    }
}