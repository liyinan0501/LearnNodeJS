const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  // 1.acquiring url of client browser requests
  const url = req.url
  // 2. setting the default response page content
  let content = `<h1>404 Page not found</h1>`
  // 3. if client requests / or /index.html, changing default content to Home page
  // 4. if client requests /about.html, changing default content to About page
  if (url === '/' || url === '/index.html') {
    content = `<h1>Home Page</h1>`
  } else if (url === '/about.html') {
    content = `<h1>About Page</h1>`
  }
  res.end(content)
})

server.listen(80, () => {
  console.log('http server running at http://127.0.01')
})
