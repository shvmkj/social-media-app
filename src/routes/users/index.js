const {Router} = require('express')
const {
    getUserByUserId,
    createAnonUser,
    getUserByUserName
} = require('../../controllers/users');
const { getRandomUserName } = require('../../utils/username');
const route = Router()
route.get('/:id',async (req,res)=>{
    let user;
    if(isNaN(parseInt(req.params.id))){
        user = await getUserByUserName(req.params.id)
    }else{
        user = await getUserByUserId(req.params.id)
    }
    if(user){
        res.status(200).send(user)
    }else{
        res.status(404).send({
            error : "No Such User id or User Name"
        })
    }
})
route.post('/',async(req,res)=>{
    const user = await createAnonUser()
    res.status(201).send(user)
})
module.exports = {
    userRoute : route
}