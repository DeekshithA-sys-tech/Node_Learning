const express = require('express')


const userRouter = express.Router()


userRouter.get('/',(req,res)=>{
    res.send("user HOME PAGE")
    res.end()
})
userRouter.get('/about',(req,res)=>{
    res.send("USER ABOUT PAGE")
    res.end()
})

module.exports = userRouter