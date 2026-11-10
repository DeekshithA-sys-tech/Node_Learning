const express = require('express')

const fs = require('fs')
const userRouter = express.Router()




userRouter.get('/',(req,res)=>{
    res.set("Content-Type","text/html")
    fs.createReadStream('./pages/user.html','utf-8').pipe(res)
})
userRouter.get('/display',(req,res)=>{
    res.set("Content-Type","text/html")
    fs.createReadStream('./pages/userDisplay.html','utf-8').pipe(res)
})


module.exports = userRouter