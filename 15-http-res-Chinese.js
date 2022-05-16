// Garbled Solution for using Chinese characters
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  const method = req.method
  const str = `您请求的 url 地址是 ${url}, 请求的 method 类型是 ${method}`
  // using the setHeader to tell the client's browser
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  console.log(str)

  res.end(str)
})

server.listen(80, () => {
  console.log('http server running at http://127.0.01')
})
