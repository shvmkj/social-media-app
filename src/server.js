const express = require('express')
const {db} = require('./db/models')
const app = express()
const{userRoute} = require('./routes/users/index')
const{postRoute} =require('./routes/posts/index')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)
app.use('/',express.static(__dirname+'/public'))
db.sync().then(()=>{
    app.listen(4404,()=>{
        console.log('Server is running http://localhost:4404')
    })
}).catch((err)=>{
    console.error(new Error('Could not Start Database'))
    console.error(err)
})
