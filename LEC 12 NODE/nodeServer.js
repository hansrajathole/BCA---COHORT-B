const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("home page")
    }
    if(req.url === "/about"){
        res.end("About page")
    }
})

const PORT = 3000

server.listen(PORT,()=>{
    console.log("server is runing on port no :",PORT);
    
})