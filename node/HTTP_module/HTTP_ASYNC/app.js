const http = require('http')
const fs = require('fs').promises

const server = http.createServer(async (req,res)=>{

        

        try {
            const data = await fs.readFile("text.txt","utf-8")  
            res.writeHead(200,'ok',{"content-type":"text/plain"})
            res.end(data)
        } catch (error) {
             console.log(error)
        }
        })
        


const port = 5000;
server.listen(port,(err)=>{
    if(err) throw err;
    console.log(`server started @ http://localhost:${port}`)
})


// const http = require('http')
// const fs = require('fs').promises

// const server = http.createServer(async (req, res) => {
//     try {
//         const data = await fs.readFile("text.txt", "utf-8")
//         res.writeHead(200, { "Content-Type": "text/plain" })
//         res.end(data)
//     } catch (error) {
//         console.log(error)
//         res.writeHead(500, { "Content-Type": "text/plain" })
//         res.end("Internal Server Error")
//     }
// })

// server.listen(5000, () => {
//     console.log("Server running at http://localhost:5000")
// })