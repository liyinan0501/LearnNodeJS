// fs-readFile

// import fs module
const fs = require('fs')

// fs.readFile(path,[options], callback)
// 1. target file path
// 2. Unicode Standard
// 3. callback, get result of reading failed or succeed err dataStr
fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
  // failed
  console.log(err)
  console.log('-------------')
  // succeed
  console.log(dataStr)

  // succeed:
  //   null
  // -------------
  // this is read text.

  // failed:
  //   [Error: ENOENT: no such file or directory, open './files/readMe11.txt'] {
  //    errno: -2,
  //     code: 'ENOENT',
  //     syscall: 'open',
  //     path: './files/readMe11.txt'
  //   }
  //   -------------
  //   undefined
})
