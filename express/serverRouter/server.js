const express = require('express')
const app =  require('./index')

const port = 3000


app.listen(port , (err)=>{
    if(err) throw err;
    console.log(`server running @ http://localhost:${port}`)
})
