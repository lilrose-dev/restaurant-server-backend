const { fetch, fetchAll } = require('../../utils/postgres')

const FOOD = `
    SELECT * FROM foods
`
const NEW_FOOD = `
    INSERT INTO foods(food_name, branch_id, food_price)VALUES($1, $2, $3)RETURNING *
`
const UPDATE_FOOD = `
    UPDATE foods SET food_name = $1 food_price = $2 WHERE food_id = $3 RETURNING * 
`
const DEL_FOOD = `
    DELETE FROM foods WHERE food_id = $1
`
const BRANCH_FOOD = `
    SELECT * FROM foods WHERE branch_id = $1
`

const food = () => fetchAll(FOOD)
const filterFood = (branchID) => fetchAll(BRANCH_FOOD, branchID)
const newFood = (name, branchID, price) => fetch(NEW_FOOD, name, branchID, price)
const updateFood = (name, price, id) => fetch(UPDATE_FOOD, name, price, id)
const delFood = (id) => fetch(DEL_FOOD, id)

module.exports = {
    food, 
    filterFood,
    newFood,
    updateFood,
    delFood
}