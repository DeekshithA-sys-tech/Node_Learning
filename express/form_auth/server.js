const express = require("express")

const fs = require('fs')

const pagesRoutes = require('./routes/pagesRoutes')
const app = express()

const port = 5000

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

let auth = ((req,res,next)=>{
    let credetial = { useremail : "a@gmail.com",
    userpassword : "123"}
    let{useremail,userpassword} = credetial; 
    let{email,password} = req.body;
    if(email===useremail){
        if(password===userpassword){
            next()
            
        }else{
            console.log(`wrong password`)
        }
    }else{
        console.log(`invalid user`)
    }
   
    
})

app.post('/login',auth,(req,res)=>{
    res.set("Content-Type","text/html")
    fs.createReadStream('pages/home.html','utf-8').pipe(res)
    
})

app.use('/',pagesRoutes)


app.listen(port , ()=>{
    console.log(`server is running @ http://localhost:${port}`)
})
module.exports= app;