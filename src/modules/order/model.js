const {fetch, fetchAll} = require('../../utils/postgres')

const ORDERS = `
    SELECT * FROM orders
`
const NEW_ORDER = `
    INSERT INTO orders(order_user, order_location,order_phone, order_food, order_price, order_food_count)
        VALUES($1, $2, $3, $4, $5, $6)RETURNING *
`
const DEL_ORDER = `
    DELETE FROM orders WHERE order_id = $1
`

const orders = () => fetchAll(ORDERS)
const newOrder = (userName, location, phone, foodName, price, count) => fetch(NEW_ORDER, userName, location, phone, foodName, price, count)
const delOrder = (id) => fetch(DEL_ORDER, id)
module.exports = {
    orders,
    newOrder,
    delOrder
}