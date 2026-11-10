const http = require("http")

const fs = require('fs')

const {mongodbConnection} = require('./database');


mongodbConnection();

const port = 5000

const server = http.createServer(async(req,res)=>{
    try {
        


        if(req.url==='/'){
            res.writeHead(200,'ok',{"content-type":"text/html"})
            const data = fs.createReadStream('../client/index.html','utf-8')
            data.pipe(res)
        }
        else if(req.url==='/display'){
            res.writeHead(200,'ok',{"content-type":"text/html"})
            const data = fs.createReadStream("../client/display.html","utf-8")
            data.pipe(res)
        }
        else if(req.url === '/getdata' && req.method==="GET"){
            try {
                const collection = await mongodbConnection();
                const data = await collection.find({}).toArray()
                res.writeHead(200,'ok',{"content-type":"application/json"})
                res.end(JSON.stringify(data))
            } catch (error) {
                res.writeHead(500,{"content-type":"application/json"})
                res.end(JSON.stringify({message:"data not found"}))
            }
        }
        
        else if(req.url === '/js_client'){
            res.writeHead(200,'ok',{"content-type":"application/js"})
            const data = fs.createReadStream('../client/app.js','utf-8')
            data.pipe(res)
        } 
        else if(req.url ==="/add" && req.method === "POST"){
            let body = ""
            req.on('data',(chunk)=>{
                    body += chunk.toString()
                })
            req.on('end',async()=>{
                try {
                    const collection = await mongodbConnection();
                    const data = JSON.parse(body)
                    await collection.insertOne(data)
                    res.writeHead(200,'ok',{"content-type":'application/json'})
                    res.end(JSON.stringify({message:"data added successfully"}))
                
                } catch (error) {
                    res.writeHead(500,{"content-type":"application/json"})
                    res.end(JSON.stringify({message:"failed to add data"}))
                
                }
            } )
                
        

        } 
    } catch (error) {
        
    }
 

})
        

server.listen(port,()=>{
    console.log(`server is running @http://localhost:${port}`)
})