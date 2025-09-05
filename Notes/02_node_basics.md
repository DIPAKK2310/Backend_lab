<h2>Initializing the project: </h2>

```bash
 npm init
 #or
 yarn init
 #or
 bun init
```



<h2>Basic code to create server :</h2>

```bash

    import http from "http";
    import dotenv from "dotenv";
   

    dotenv.config({
    path: "./.env", //onmain folder search for path of .env
    });

    const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    if (req.url === "/")
     {
        res.end("welcome to 🏠 page");
     } 
    else if (req.url === "/about") 

    {
        res.end("Welcome to about Page");
    } 
    
    else if (req.url === "/contact") 
    {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(
        "<h3>Contact:-692312 </h3>
        <h1>Email:-SunnyDeole69@Hotmail.com</h1>",
        );
    } 
    else if (req.url === "/info") 
    {
        res.end("Welcome to info page");
    } 
    else if (req.url === "/product") 
    {
        res.writeHead(200, { "Content-Type": "applicationjson"});
        res.end(
        JSON.stringify([
            { id: 1, Product_name: "Iphone", category: 
            "Electronic", price: 69000 },
            { id: 2, Product_name: "Mobile", category: 
            "Electronic", price: 3000 },
        ]),
        );
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Error");
    }
    });

    const PORT = process.env.PORT;

    server.listen(PORT, () => {
    console.log(`server is listnening on http://localhost:${PORT}`);
    });
```

# ⚡ Node.js Notes (Beginner → Intermediate)

## 1. What is Node.js?
- JavaScript runtime built on Chrome’s V8 engine.
- Lets you run JS outside the browser.
- Used for servers, APIs, CLI tools, and more.

---

## 2. Core Concepts
- **Non-blocking / Asynchronous**: Node handles many requests at the same time.
- **Single-threaded**: Uses an event loop, not multiple threads.
- **Modules**:
  - Built-in (http, fs, path, os, events)
  - Custom (your own files)
  - Third-party (installed via npm)

---

## 3. Node.js Modules
- Import/export modules:

  ```js
  // ES Modules
  import fs from "fs";

  // CommonJS
  const fs = require("fs");
  
Common modules:
```bash
http → create servers

fs → file system

path → work with file paths

os → system info

events → event handling

```
4. HTTP Module (Server Basics)
Create server:
```bash
js
Copy code
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World 🌍");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
Handle routes with req.url and req.method.
```

5. NPM (Node Package Manager)

Install dependencies:

```bash
Copy code
npm init -y        # create package.json
npm install lodash # install lodash
npm install --save-dev nodemon
Run scripts:

json
Copy code
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```
6. Nodemon (Dev Tool)
Restarts server automatically on file changes.

Install:

```bash
Copy code
npm install --save-dev nodemon
npm run dev
```
7. File System (fs)
```bash
Read/write files:

js
Copy code
import fs from "fs";

fs.writeFileSync("data.txt", "Hello from Node.js");
const data = fs.readFileSync("data.txt", "utf-8");
console.log(data);
```
8. Events & EventEmitter
```bash
Handle custom events:

js
Copy code
import { EventEmitter } from "events";
const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

emitter.emit("greet", "Dipak");
```
9. Path & OS Modules
```bash
Path:

js
Copy code
import path from "path";
console.log(path.basename("/user/local/index.js")); // index.js
OS:

js
Copy code

import os from "os";
console.log(os.platform());
console.log(os.totalmem());
10. REST API Basics (Without Express)
Handle CRUD with http:

js
Copy code
if (req.method === "GET" && req.url === "/api/data") { ... }
if (req.method === "POST" && req.url === "/api/data") { ... }
```
11. Environment Variables
Use dotenv:

```bash
Copy code
npm install dotenv
js
Copy code
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
```
12. Debugging
console.log (simple debugging).

node inspect index.js (Node debugger).

VSCode debugger integration.

📌 Summary
Beginner: Learn core modules (http, fs, path, os, events).

Intermediate: Build CRUD APIs with http, use npm & nodemon.

Next Step: Move to Express.js for cleaner APIs.