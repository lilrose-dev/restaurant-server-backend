const model = require('./model')
const categoryInput = require('../category/model')
const { toLocaleString } = require('..')

module.exports = {
    Query: {
        restaurants: async() => await model.restaurants(),

        filterRes: async(_, {catID}) => {
            const filteredRes = await model.filterRes(Number(catID))
            return filteredRes
        }
    },  

    Mutation: {
        newRestaurant: async(_,{name, catID}) => {
            const newRes = await model.newRestaurant(name, catID)
            return newRes
        },
        updateRestaurant: async(_, {name, id}) => {
            return await model.updateRestaurant(name, id)
        },
        delRestaurant: async(_, {id}) =>{
            await model.delRestaurant(id)
            return 'Restaurant is deleted'
        }
    },

    Restaurant:{
        id: (global) => global.restaurant_id,
        name:(global) => global.restaurant_name,
        catID: (global) => global.category_id
        
    }
}