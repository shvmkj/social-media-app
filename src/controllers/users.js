const {Users} = require('../db/models')
const {getRandomUserName} = require('../utils/username')
async function createAnonUser(){
    const user = await Users.create({
        username : getRandomUserName()
    })
    return user
}
async function getUserByUserId(id){
    return await Users.findOne({where :{id}})
}
async function getUserByUserName(username){
    return await Users.findOne({where :{username}})
}

module.exports = {
    createAnonUser,
    getUserByUserName,
    getUserByUserId
}