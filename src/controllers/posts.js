const {Posts,Users} = require('../db/models')
async function createNewPost(userId,title,body){
    const post = await Posts.create({
        title,
        userId,
        body
    })
    return post
}

async function getAllPost(query){
    const posts = await Posts.findAll({
        include : [Users]
    })
    return posts
}
/*
async function task(){
    const posts=await showAllPost()
    for (let p of posts){
        console.log(p.title, p.user.username,p.body)
    }
}
task()*/

module.exports ={
    createNewPost,getAllPost
}