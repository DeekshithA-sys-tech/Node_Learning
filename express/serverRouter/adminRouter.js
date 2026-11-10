const express = require('express')


const adminRouter = express.Router()




adminRouter.get('/',(req,res)=>{
    res.send("ADMIN HOME PAGE")
    res.end()
})
adminRouter.get('/about',(req,res)=>{
    res.send("ADMIN ABOUT PAGE")
    res.end()
})
adminRouter.post('/add',(req,res)=>{
    const data = req.body
    res.status(200).json({data})
    res.end()
})

module.exports = adminRouter