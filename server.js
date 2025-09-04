import http from "http";
import dotenv from "dotenv"
import { json } from "stream/consumers";

dotenv.config({
    path:"./.env" //onmain folder search for path of .env
})

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  if (req.url === "/") {
    res.end("welcome to 🏠 page");
  } else if (req.url === "/about") {
    res.end("Welcome to about Page");
  } else if (req.url === "/contact") {
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end("<h3>Contact:-696969 </h3><h1>Email:-SunnyLeone69@Hotmail.com</h1>");
  } else if (req.url === "/info") {
  } else if (req.url === "/product") {
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify([
        {id:1,Product_name: "Iphone",category: "Electronic",price:69000},
        {id:2,Product_name:"Mobile", category: "Electronic",price:3000},
    ]));
  } else if (req.url === "/info") {
    res.end("Welcome to info page why because your smart");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Error");
  }
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`server is listnening on http://localhost:${PORT}`);
});
