// require core module http
const http = require("http");
const port = 8080;
http.createServer((req, res) => res.end("hello world")).listen(port);
console.log(`this server is running on port : ${port}`);
