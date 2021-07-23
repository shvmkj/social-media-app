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
    if(!query){
    const posts = await Posts.findAll({
        include : [Users]
    })
    return posts}
    const posts = await Posts.findAll({where: { userId: query }})
return posts
}
/*
async function task(){
    let ans2 =  await getAllPost()
    
    console.log(ans2)
}
task()*/

module.exports ={
    createNewPost,getAllPost
}