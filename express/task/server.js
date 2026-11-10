const express = require('express')
const fs = require('fs')

const adminRouter = require('./adminRouter')
const userRouter = require('./userRouter')
const app = express()


const port = 5000




app.use('/admin',adminRouter)

app.use('/user',userRouter)

app.get('/',(req,res)=>{

    res.set("Content-Type","text/html")
    fs.createReadStream('./pages/index.html','utf-8').pipe(res)
    
})


app.listen(port,()=>{
    console.log(`server is running @ http://localhost:${port}`)
})

module.exports = app