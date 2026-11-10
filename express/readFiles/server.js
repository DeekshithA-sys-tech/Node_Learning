const express = require('express')
const fs = require('fs')
require('dotenv').config()
const app = express()

const port = process.env.PORT



app.get('/',(req,res)=>{
    // res.send(`<h1>hello</h1>`)
    res.set("Content-Type","text/html")
    fs.createReadStream('./pages/index.html','utf-8').pipe(res)
    
})

app.get('/style',(req,res)=>{
    // res.send(`<h1>hello</h1>`)
    res.set("Content-Type","text/css")
    fs.createReadStream('./pages/style.css','utf-8').pipe(res)
    
})

app.get('/home',(req,res)=>{
    // res.send(`<h1>hello</h1>`)
    res.set("Content-Type","text/html")
    fs.createReadStream('./pages/home.html','utf-8').pipe(res)
    
})

app.get('/about',(req,res)=>{
    // res.send(`<h1>hello</h1>`)
    res.set("Content-Type","text/html")
    fs.createReadStream('./pages/about.html','utf-8').pipe(res)
    
})

app.get('/contact',(req,res)=>{
    // res.send(`<h1>hello</h1>`)
    res.set("Content-Type","text/html")
    fs.createReadStream('./pages/contact.html','utf-8').pipe(res)
    
})


app.get('/image',(req,res)=>{
     res.set("Content-Type","image/jpg")
     fs.createReadStream('./images/abc.jpg').pipe(res)
})
app.get('/video',(req,res)=>{
     res.set("Content-Type","video/mp4")
     fs.createReadStream('./videos/video.mp4').pipe(res)
})






app.listen(port , (err)=>{

    if(err) throw err;

    console.log(`server is running @ http://localhost:${port}`)

})

module.exports = app