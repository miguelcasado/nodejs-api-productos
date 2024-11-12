const http = require('http')

const server = http.createServer(async (req,res)=>{
    if(req.method==='GET' && req.url === `/`){
        res.end()
        console.log("hello from server")
    }
})

server.listen(3001, () =>{
    console.log('server on http://localhost:3001')
})