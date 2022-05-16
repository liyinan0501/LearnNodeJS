// http module
// http module in Node.js make personal computer as Web server

// 1. import http module
const http = require('http')
// 2. create an instance of web server
const server = http.createServer()
// 3. bind request event, monitoring the client's request
server.on('request', (req, res) => {
  console.log('Someone visit our web server.')
})
// 4.turn on the server
server.listen(80, () => {
  console.log('http server running at http://127.0.01')
})
