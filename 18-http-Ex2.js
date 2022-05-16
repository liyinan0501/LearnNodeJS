const fs = require('fs')
const path = require('path')
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  // req:
  // 11-clock-Ex-files/index.html
  // 11-clock-Ex-files/index.css
  // 11-clock-Ex-files/index.js
  const url = req.url
  // const fpath = path.join(__dirname, url)
  let fpath = ''
  if (url === '/') {
    fpath = path.join(__dirname, './11-clock-Ex-files/index.html')
  } else {
    fpath = path.join(__dirname, '/11-clock-Ex-files/', url)
  }

  fs.readFile(fpath, 'utf8', (err, dataStr) => {
    if (err) return res.end('<h1>404 Page Not Found</h1>')
    res.end(dataStr)
  })
})

server.listen(80, () => {
  console.log('http server running at http://127.0.01')
})

//http://127.0.0.1/11-clock-Ex-files/index.html
