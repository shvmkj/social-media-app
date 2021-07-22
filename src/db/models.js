const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect : 'mysql',
    username : 'socialdb',
    password : 'socialmediapass',
    host : 'localhost',
    database : 'socialdb'
})
const COL_ID_DEF = {
    type : Sequelize.DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true,
}
const COL_USERNAME_DEF = {
    type : Sequelize.DataTypes.STRING(30),
    allowedNull : false,
    unique : true,
}
const COL_TITLE_DEF = {
    type : Sequelize.DataTypes.STRING(150),
    allowedNull : false,
}

const Users = db.define('user', {
    id : COL_ID_DEF,
    username : COL_USERNAME_DEF,
});
const Posts = db.define('post',{
    id : COL_ID_DEF,
    title : COL_TITLE_DEF,
    body : {
        type : Sequelize.DataTypes.TEXT,
        allowedNull : false
    }
})
const Comments = db.define('comment',{
    id : COL_ID_DEF,
    title : COL_TITLE_DEF,
    body : {
        type : Sequelize.DataTypes.TEXT('tiny')
    }
})
Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

module.exports = {
    db,Users, Posts, Comments
}