const {fetch, fetchAll } = require('../../utils/postgres')

const CATEGORY = `
    SELECT * FROM categories
`
const NEW_CATEGORY = `
    INSERT INTO categories(category_name)VALUES($1)RETURNING *
`
const UPDATE_CATEGORY = `
    UPDATE categories SET category_name = $1 WHERE category_id = $2 RETURNING *
`
const DEL_CATEGORY = `
    DELETE FROM categories WHERE category_id = $1
`
const category = () => fetchAll(CATEGORY)
const newCategory = (name) => fetch(NEW_CATEGORY, name)
const updateCategory = (id, name) => fetch(UPDATE_CATEGORY, id, name)
const delCategory = (id) => fetch(DEL_CATEGORY, id)

module.exports = {
    category,
    newCategory,
    updateCategory,
    delCategory
}