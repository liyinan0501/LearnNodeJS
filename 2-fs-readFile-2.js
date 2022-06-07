const fs = require('fs')
fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('Read fails!!' + err.message)
  }
  console.log('Read succeed!!' + dataStr)
})
