const express = require('express')
const fs = require('fs')
const mongodb = require('mongodb').MongoClient
const app = express()

const port = 5000

const URL =`mongodb://localhost:27017`;

app.use(express.urlencoded({extended:true}))



const connectDB = async()=>{
    try {
        const connectedDB = await mongodb.connect(URL)
        const db = await connectedDB.db('STUDENT');
        const Collection = await db.collection('STD_data')
        console.log(`database is connected`)
        
        
    } catch (error) {
        console.log(`database is not connected ${error}`)
    }
}
connectDB();

app.get('/',(req,res)=>{
    res.set("Content-Type","text/html")
    fs.createReadStream('./index.html',"utf-8").pipe(res)
})

app.post('/formdata',async(req,res)=>{
    const {fname,lname} = req.body
    let col = await db.collection("STD_data")
    col.insertMany({
        "fname":fname,
        "lname":lname
    })
    res.send(`data set to database`)
})

app.listen(port,()=>{
    console.log(`server is running @ http://localhost:${port}`)
})
