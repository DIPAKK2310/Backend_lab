import http from "http"

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/plain"}

    );

    res.end("Hello from http server");
});


const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`server is listnening on http://localhost:${PORT}`)
})