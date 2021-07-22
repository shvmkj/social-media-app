const {Router} = require('express')
const route = Router()
const {createNewPost,getAllPost} = require('../../controllers/posts')
route.get('/',async (req,res)=>{
    const posts = await getAllPost()
    res.status(200).send(posts)
})
route.post('/',async (req,res)=>{
    const {userId,title,body} = req.body
    if((!userId) || (!title) || (!body)){
        return res.status(400).send({
            error : "Data Invalid"
        })
    }
    const post = await createNewPost( userId,title,body)
    res.status(201).send(post)
})
module.exports = {
    postRoute : route
}