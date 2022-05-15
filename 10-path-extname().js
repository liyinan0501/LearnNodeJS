// path

// path.extname() - get the extension name from a path

// path.extname(path)
// 1. path <string>
// return <string> the extension name

const path = require('path')
const fpath = '/a/b/c/index.html'

let fext = path.extname(fpath)
console.log(fext) //.html
