const express = require('express')
const fs = require('fs')
const app = require('./server')

const adminRouter = express.Router()




adminRouter.get('/',(req,res)=>{
    res.set("Content-Type","text/html")
    fs.createReadStream('./pages/admin.html','utf-8').pipe(res)
})
adminRouter.get('/display',(req,res)=>{
    res.set("Content-Type","text/html")
    fs.createReadStream('./pages/adminDisplay.html','utf-8').pipe(res)
})
adminRouter.get('/add',(req,res)=>{
    res.set("Content-Type","text/html")
    fs.createReadStream('./pages/adminAdd.html','utf-8').pipe(res)
})

module.exports = adminRouter