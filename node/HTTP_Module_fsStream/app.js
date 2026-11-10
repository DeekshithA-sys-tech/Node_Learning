// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     try {
//         res.writeHead(200,'success',{"content-type":"text/plain"})
//         const read = fs.createReadStream("text.txt",'utf-8')
//         read.pipe(res)
//     } catch (error) {
//         console.log(error)
//     }

// })
// const port = 5000
// server.listen(port,(err)=>{
//     if(err) throw err;
//     console.log(`server started @ http://localhost:${port}`)
// })



// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{

//   try {
//       res.writeHead(200,'ok',{"content-type":"text/html"})
//     const read = fs.createReadStream("index.html",'utf-8')
//     read.pipe(res)
//   } catch (error) {
//     console.log(error)
//   }

// })

// const port = 5000;
// server.listen(port,(err)=>{
//     if(err) throw err;
//     console.log(`server started @ http://localhost:${port}`)
// })





// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{

//   try {
//     res.writeHead(200,'ok',{"content-type":"text/js"})
//     const read=fs.createReadStream("script.js","utf-8")
//     read.pipe(res)
//   } catch (error) {
//     console.log(error)
//   }

// })

// const port = 5000;
// server.listen(port,(err)=>{
//     if(err) throw err;
//     console.log(`server started @ http://localhost:${port}`)
// })





// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{

//     try {
//         res.writeHead(200,'ojk',{"content-type":"text/css"})
//         const read = fs.createReadStream('style.css','utf-8')
//         read.pipe(res)
//     } catch (error) {
//         console.log(error)
//     }



// })

// const port = 5000;
// server.listen(port,(err)=>{
//     if(err) throw err;
//     console.log(`server started @ http://localhost:${port}`)
// })

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{

//   try {
//     res.writeHead(200,'ok',{"content-type":"application/json"})
//     const read=fs.createReadStream("data.json","utf-8")
//     read.pipe(res)
//   } catch (error) {
//     console.log(error)
//   }

// })

// const port = 5000;
// server.listen(port,(err)=>{
//     if(err) throw err;
//     console.log(`server started @ http://localhost:${port}`)
// })