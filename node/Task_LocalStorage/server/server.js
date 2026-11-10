const http = require('http')

const fs = require('fs')

const server = http.createServer((req,res)=>{

    try {
        if(req.url==='/'){
            res.writeHead(200,'ok',{"content-type":"text/html"})
            const read = fs.createReadStream('../client/index.html','utf-8')
            read.pipe(res)
        }
        else if(req.url==='/style'){
            res.writeHead(200,'ok',{"content-type":"text/css"})
            const read = fs.createReadStream("../client/style.css","utf-8")
            read.pipe(res)
        }else if(req.url==='/app'){
            res.writeHead(200,'ok',{"content-type":"text/js"})
            const read = fs.createReadStream("../client/app.js","utf-8")
            read.pipe(res)
        }else if(req.url==='/display'){
             res.writeHead(200,'ok',{"content-type":"text/html"})
            const read = fs.createReadStream("../client/display.html","utf-8")
            read.pipe(res)
        }

    } catch (error) {
        console.error(error)
    }

})

const port = 5000

server.listen(port,(err)=>{
    if (err) throw err;
    console.log(`srever is running @ http://localhost:${port}`)
})