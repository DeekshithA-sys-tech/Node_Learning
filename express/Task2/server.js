const express = require('express');

const fs = require("fs");


const {connectDB} = require('./database/database.js');
const pagesRoutes = require('./routers/pageRoutes.js');

const app = express()

const port = 5000

connectDB();

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.set("Content-Type","text/html")
    fs.createReadStream("index.html","utf-8").pipe(res)
})


app.use('/',pagesRoutes)

app.listen(port,(err)=>{
    if(err) throw err
    console.log(`server is created @ http://localhost:${port}`)
})

module.exports = app