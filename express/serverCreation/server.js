const express = require('express')

const app = express()
app.use(express.json())
const port = 3000

app.get('/',(req,res)=>{
    res.send("home page")
    res.end()
})

app.post('/',(req,res)=>{
    const data = req.body
    res.json({"data":data})
        
    res.end( )
})


app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`server is running @ http://localhost:${port}`)
})