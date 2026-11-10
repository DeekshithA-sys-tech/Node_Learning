const express = require('express')

const app = express()

app.use(express.json())
const adminRouter = require('./adminRouter')
const userRouter = require('./userRouter')

app.get('/',(req,res)=>{
    res.send("home page")
})


app.use('/admin',adminRouter)
app.use('/user' , userRouter)


app.use((req,res)=>{
     res.send("<h1>u have entered the wrong path</h1>")
     res.end()
})



module.exports=app