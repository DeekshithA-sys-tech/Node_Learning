const http = require('http')
const fs = require('fs')
const { error } = require('console')

const server = http.createServer((req, res) => {
    
        try {
            if (res.url === '/') {
            res.writeHead(200, 'ok', { "content-type": "text/html" })
            const read = fs.createReadStream("index.html", 'utf-8')
            read.pipe(res)
        }
        else if (res.url === '/style') {
        
             res.writeHead(200, 'ok', { "content-type": "text/css" })
            let read = fs.createReadStream("style.css", 'utf-8')
            read.pipe(res)

        
    }
}
     catch (error) {
            console.error(error)
        }

    
})

const port = 5000
server.listen(port, (err) => {
    if (err) console.error(err);
    console.log(`server is created @ http://localhost:${port}`)
})