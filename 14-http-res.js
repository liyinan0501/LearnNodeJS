const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  const method = req.method
  const str = `Your request url is ${url}, and request method is ${method}`
  console.log(str)

  res.end(str) // 发送到客户端
})

server.listen(80, () => {
  console.log('http server running at http://127.0.01')
})
