// fs-writeFile

// fs.writeFile(file, data, [options], callback)
// 1. path
// 2. write content
// 3. Unicode Standard (option) utf8(defult)
// 4. callback

const fs = require('fs')
fs.writeFile(
  './files/3.txt',
  'This is what my writing for 3!!',
  function (err) {
    // if writing succeed, err = null
    // if writing fails, err = fail object
    console.log(err)
  }
)
