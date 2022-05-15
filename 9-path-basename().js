// path

// path.basename() - get the file name from a path

// path.basename(path,[ext])
// 1. path <string>
// 2. ext <string> extension (option)
// return <string> the last part of path

const path = require('path')
const fpath = '/a/b/c/index.html'

let fileName = path.basename(fpath)
console.log(fileName) // index.html

let fileNameWithoutExt = path.basename(fpath, '.html')
console.log(fileNameWithoutExt) //index
