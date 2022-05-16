const http = require('http')
const server = http.createServer()

server.on('request', (req) => {
  const url = req.url
  const method = req.method
  const str = `Your request url is ${url}, and request method is ${method}`
  console.log(str)
  //Your request url is /, and request method is GET
})

server.listen(80, () => {
  console.log('http server running at http://127.0.01')
})
