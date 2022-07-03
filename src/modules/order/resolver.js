const model = require('./model')

module.exports = {
    Query: {
        orders: async() => await model.orders()
    },

    Mutation: {
        newOrder: async(_, {userName, location, phone, foodName, price, count}) => {
            const order = await model.newOrder(userName, location, phone, foodName, price, count)
            return order
        },
        delOrder: async(_, {id}) => {
            await model.delOrder(id)
            return "This order is deleted"
        }
    },

    Order: {
        id: (global) => global.order_id,
        userName: (global) => global.order_user,
        location: (global) => global.order_location,
        phone: (global) => global.order_phone,
        foodName: (global) => global.order_food,
        price: (global) => global.order_price,
        count: (global) => global.order_food_count
    }
}