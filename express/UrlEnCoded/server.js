const express = require('express')
const fs = require('fs')
const app = express()


const port = 5000

app.use(express.urlencoded(({extended:true})))

app.get('/',(req,res)=>{
    res.set("Content-Type","text/html")
    fs.createReadStream('index.html','utf-8').pipe(res)
})

app.post('/print',(req,res)=>{
    let{fname,lname}=req.body
    res.send(`${fname} ${lname}`)
    res.end()
})


app.listen(port,()=>{
    console.log(`server is running @http://localhost:${port}`)
})