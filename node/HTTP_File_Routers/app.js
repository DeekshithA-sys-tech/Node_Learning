const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('text.txt','utf-8',(err,data)=>{
            if(err) throw err;
            else{
                res.writeHead(200,'ok',{"content-type":"text/plain"})
                res.end(data)
            }
        })

    }
    else if(req.url === '/htmlfile'){
        fs.readFile('index.html','utf-8',(err,data)=>{
            if(err) throw err;
            else{
                res.writeHead(200,'ok',{"content-type":"text/html"})
                res.end(data)
            }
        })
    }
    else if(req.url === '/json'){
        fs.readFile('data.json','utf-8',(err,data)=>{
            if(err) throw err;
            else{
                res.writeHead(200,'ok',{"content-type":"application/json"})
                res.end(data)
            }
        })
    }
    else if(req.url === '/script'){
        fs.readFile('script.js','utf-8',(err,data)=>{
            if(err) throw err;
            else{
                res.writeHead(200,'ok',{"content-type":"text/js"})
                res.end(data)
            }
        })
    }
    else{
        res.write(`page not found`)
        res.end()
    }

})

const port = 5000
server.listen(port,(err)=>{
    if(err) throw err;
    console.log(`server started @ http://localhost:${port}`)
})