const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    try {
        if(req.url==='/'){
            res.writeHead(200,'ok',{"content-type":"text/html"})
            let read = fs.createReadStream("../client/index.html","utf-8")
            read.pipe(res)
        }
        else if(req.url==='/design'){
            res.writeHead(200,'ok',{"content-type":"text/css"})
            let read = fs.createReadStream("../client/style.css","utf-8")
            read.pipe(res)
        }else if(req.url==='/script'){
            res.writeHead(200,'ok',{"content-type":"text/js"})
            let read = fs.createReadStream("../client/script.js","utf-8")
            read.pipe(res)
        }
        
    } catch (error) {
        console.error(error)
    }

})

const port = 5000

server.listen(port,(err)=>{
    if(err) throw err;
    console.log(`sever is started @ http://localhost:${port}`)
})