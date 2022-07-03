const {fetch, fetchAll} = require('../../utils/postgres')

const BRANCHES = `
    SELECT * FROM branches
`
const NEW_BRANCH = `
    INSERT INTO branches(branch_name, restaurant_id)VALUES($1, $2)RETURNING *
`
const UPDATE_BRANCH = `
    UPDATE branches SET branch_name = $1 WHERE branch_id = $2 RETURNING *
`
const DEL_BRANCH = `
    DELETE FROM branches WHERE branch_id = $1 
`
const FIL_BRANCHES = `
    SELECT * FROM branches WHERE restaurant_id = $1
`

const branches = () => fetchAll(BRANCHES)
const filtBranches = (resID) => fetchAll(FIL_BRANCHES, resID)
const newBranch = (name, restID) => fetch(NEW_BRANCH, name, restID)
const updateBranch = (name, id) => fetch(UPDATE_BRANCH, name, id)
const delBranch = (id) => fetch(DEL_BRANCH, id)

module.exports = {
    branches,
    filtBranches,
    newBranch,
    updateBranch,
    delBranch
}