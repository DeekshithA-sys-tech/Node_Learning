const http = require('http')

const {mongoConnection} = require('./database')

const fs = require("fs")

const port = 5000

mongoConnection()

const server = http.createServer(async(req,res)=>{

    try {
        if(req.url === '/'){
            res.writeHead(200,'ok',{"content-type":"text/html"})
            const data  = fs.createReadStream("../client/index.html","utf-8")
            data.pipe(res)
        }
        else if(req.url === '/display'  && req.method === "GET"){
            res.writeHead(200,'ok',{"content-type":"text/html"})
            const data  = fs.createReadStream("../client/display.html","utf-8")
            data.pipe(res)
        }


        else if(req.url === '/getdata'  && req.method === "GET"){
           

             try {
                    const collection = await mongoConnection();
                    console.log(`db is connected`)
                    
                    const result = await collection.find({}).toArray()
                    
                    res.writeHead(200,{'Content-Type':'application/json'})
                    res.end(JSON.stringify(result))
                } catch (error) {
                    console.log(error)
                    
                }
        }

        else if(req.url === '/script'){
            res.writeHead(200,{"Content-Type":"application/javascript"})
            const data = fs.createReadStream('../client/app.js','utf-8')
            data.pipe(res)

        }
        else if(req.url === '/add' && req.method === "POST"){
            let body = ""

            req.on('data',(chunk)=>{
                body += chunk.toString()
            });
            req.on('end' ,async()=>{
                try {
                    const collection = await mongoConnection();
                    let data = JSON.parse(body)
                    await collection.insertOne(data)
                    res.writeHead(200,{'Content-Type':'application/json'})
                    res.end(JSON.stringify({message:'Data added'}))
                } catch (error) {
                    console.log(error)
                    
                }
            })
            

            
            }
           
            else if(req.url === '/deleteAll' && req.method === "DELETE"){
                console.log("DELETE API HIT");
            
            
                try {
                    const collection = await mongoConnection();
                    console.log(`db is connected`)
                    
                    const result = await collection.deleteMany({})
                    console.log("Deleted count:", result.deletedCount);
                    res.writeHead(200,{'Content-Type':'application/json'})
                    res.end(JSON.stringify({
                        message:'Data DELETED',
                        count: result.deletedCount
                    }))
                } catch (error) {
                    console.log(error)
                    
                }
            

            }

    } 
    catch (error)
    {
        console.log(error)
    }

})

server.listen(port,()=>{
    console.log(`server is running @ http://localhost:${port}`)
})