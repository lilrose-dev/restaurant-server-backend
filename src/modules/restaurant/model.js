const { fetch, fetchAll } = require('../../utils/postgres')

const RESTAURANT = `
    SELECT * FROM restaurants
`

const CAT_RESTAURANT = `
    SELECT * FROM restaurants WHERE category_id = $1
`

const NEW_RESTAURANT = `
    INSERT INTO restaurants(restaurant_name, category_id)VALUES($1, $2)RETURNING *
`
const UPDATE_RESTAURANT = `
    UPDATE restaurants SET restaurant_name = $1 WHERE restaurant_id = $2 RETURNING *
`
const DEL_RESTAURANT = `
    DELETE FROM restaurants WHERE restaurant_id = $1
`
const restaurants = () => fetchAll(RESTAURANT)
const filterRes = (catID) => fetchAll(CAT_RESTAURANT, catID)
const newRestaurant = (name, catId) => fetch(NEW_RESTAURANT, name, catId)
const updateRestaurant = (name, id) => fetch(UPDATE_RESTAURANT, name, id)
const delRestaurant = (id) => fetch(DEL_RESTAURANT, id)

module.exports = {
    restaurants,
    filterRes,
    newRestaurant,
    updateRestaurant,
    delRestaurant
}