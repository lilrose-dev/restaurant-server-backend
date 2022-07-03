const model = require('./model')


module.exports = {

    Query: {
        branches: async() => await model.branches(),
        filtBranches: async(_, {resID}) => {
            const branch =  await model.filtBranches(Number(resID))
            return branch
        }
    },

    Mutation: {
        newBranch: async(_, {name, resID}) => {
            const newB = await model.newBranch(name, resID)
            return newB
        },
        updateBranch: async(_, {name, id}) => {
            return await model.updateBranch(name, id)
        },
        delBranch: async(_, {id}) => {
            await model.delBranch(id)
            return 'Branch is deleted'
        }
    },
    
    Branch: {
        id: (global) => global.branch_id,
        name: (global) => global.branch_name,
        resID: (global) => global.restaurant_id
    }
}