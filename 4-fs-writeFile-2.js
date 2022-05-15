const fs = require('fs')
fs.writeFile(
  './files/4.txt',
  'This is what my writing for 4!!!',
  function (err) {
    if (err) {
      return console.log('Writing fails!!!' + err.message)
    }
    console.log('Writing succeed!!!')
  }
)
