const express = require('express')

const app = express()

const port = 5000

app.use(express.static('public'))

app.listen(port ,(req,res)=>{
    console.log(`server is running @ http://localhost:${port}`)
})