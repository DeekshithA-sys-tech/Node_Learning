const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write('HOME PAGE')
        res.end()
    }
    else if(req.url==='/about'){
        res.write('ABOUT PAGE')
        res.end()
    }
    else if(req.url === '/menu'){
        res.write('MENU PAGE')
        res.end()
    }
    else{
        res.write('PAGE NOT FOUND')
        res.end()
    }

})
const port = 5000
server.listen(port,(err)=>{
    if(err) throw `server not found`;
    console.log(`server started @ http://localhost:${port}`)
})