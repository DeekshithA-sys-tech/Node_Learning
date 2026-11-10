// -IN nodeJS, http module is used to create web server and handle
// http request and response then print the response data in browser,
// without using any external libraries



// const http = require('http')
// console.log(http)


// const server = http.createServer((req,res)=>{
//     res.write("server is created")
//     res.end()

// })
// const port = 5000
// server.listen(port,(err)=>{
//     if(err) throw `server not started`;
//     console.log(`server is started @ http://localhost:${port}`)
// })


// create server with status code and status message

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,'success',{"content-type":"text/plain"})
//     res.end(`this msz is from srever side`)
// })

// const port = 5000

// server.listen(port,(err)=>{
//     if(err) throw err;
//     console.log(`server is started @ http://localhost:${port}`)
// })



// -create server using http module and read the text file
// using fs module CBF, display file data as a response

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{

//     fs.readFile('text.txt','utf-8',(err,data)=>{
//         if(err) throw err;
//         else{
//             res.writeHead(200,'success',{"content-type":'text/plain'})
//             res.end(data)
//         }

//     })

    
// })

// const port = 5000

// server.listen(port,(err)=>{
//     if(err) throw err;
//     console.log(`server is started @ http://localhost:${port}`)
// })


// NOTE :
// -http.createServer() is uesd to create the srever ,
// It is HOF to create CBF with 2 parameter i.e request and reaponse
// syntax : http.createServer((req , res)={})
// res.write() : It is used to send response data & it display in browser
// res.end() : It is used to end the response info


// 

// 
// 
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     fs.readFile('index.html','utf-8',(err,data)=>{
//         res.writeHead(200,'ok',{'content-type':'text/html'})
//         res.end(data)
//     })

// })
// const port = 5000

// server.listen(port,(err)=>{
//     if(err) throw err;
//     console.log(`server started @  http://localhost:${port}`)
// })


// create api

// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req,res)=>{
//     fs.readFile("data.json",'utf-8',(err,data)=>{
//         res.writeHead(200,'ok',{"content-type":"application/json"})
//         res.end(data)
//     })

// })
// const port = 5000
// server.listen(port,(err)=>{
//     if(err) throw `server error`
//     console.log(`server is started @ http://localhost:${port}`)
// })


// IMPORTANT : CONTENT-TYPE
// FOR .txt file -- "text/plain"
// FOR .html file -- "text/html"
// FOR .js file -- "text/js"
// FOR .css file -- "text/css"
// * FOR .json file -- "application/json"


// reading js file

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     fs.readFile("javaScript.js",'utf-8',(err,data)=>{
//         if(err) throw err;
//         else{
//             res.writeHead(200,'success',{"content-type":"text/js"})
//             res.end(data)
//         }
//     })

// })


// const port = 5000;
// server.listen(port,(err)=>{
//     if(err) throw `server error`;
//     console.log(`server is started @ http://localhost:${port}`)
// })




const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    fs.readFile("app.css",'utf-8',(err,data)=>{
        if(err) throw err;
        else{
            res.writeHead(200,'success',{"content-type":"text/css"})
            res.end(data)
        }
    })

})


const port = 5000;
server.listen(port,(err)=>{
    if(err) throw `server error`;
    console.log(`server is started @ http://localhost:${port}`)
})
