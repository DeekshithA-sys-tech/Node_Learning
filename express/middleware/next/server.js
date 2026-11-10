const express = require('express')

const app = express()

const port = 5000

const f1 = (req,res,next)=>{
    console.log(`middleware 1`)
    next();
}
const f2 = (req,res,next)=>{
    console.log(`middleware 2`)
    let islogin = false;
    if(islogin){
        next();
    }else{
        res.send(`invalid cradential`)
    }
    
}

app.get('/',f1,(req,res)=>{
    res.send('hello')
    res.end()
})
app.get('/dashboard',f1,f2,(req,res)=>{
    res.send('dashboard')
    res.end()
})


app.listen(port,(err)=>{
    if(err) throw err

    console.log(`server is running @ http://localhost:${port}`)
})