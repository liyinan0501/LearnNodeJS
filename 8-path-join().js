// path

// path.join() - put a few paths together and get a new ful path string
// using path.join() instead of +

// path.join([...paths])
const path = require('path')
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
// ../ will deduct the /c
console.log(pathStr) // /a/b/d/e

const pathStr2 = path.join(__dirname, './files/1.txt')
console.log(pathStr2) // /Users/yinanli/Desktop/LearnNodeJS/files/1.txt

const fs = require('fs')
fs.readFile(pathStr2, 'utf8', function (err, dataStr) {
  if (err) {
    console.log('Read fails!!' + err.message)
  }
  console.log('Read succeed!!' + dataStr)
})
