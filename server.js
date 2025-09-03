import http from "http"

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/plain"}

    );
    if (req.url ==="/") {
        res.end("Welcome to 🏠 page")
    } else if(req.url === "/about"){
        res.end("This is about📟 page")
    }else if (req.url === "/contact"){
        res.end(`<h3>Contact to sunnyleone69@hotmail.com</h3>,Mobile no:696969`)
    }else if (req.url === "/info"){
        res.end("This is info page")
    }else{
        res.writeHead(404,{"Content-Type":"text/plain"})
    res.end("Hello from http server");
    }

});


const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`server is listnening on http://localhost:${PORT}`)
})