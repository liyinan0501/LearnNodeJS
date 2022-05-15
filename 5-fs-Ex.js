const fs = require('fs')
let content = ''
fs.readFile('./files/5.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('Read fails!!', err.message)
  }
  // console.log('Read succeed!!', dataStr)
  const arrOld = dataStr.split(' ')
  const arrNew = []
  arrOld.forEach((item) => {
    arrNew.push(item.replace('=', ':'))
  })
  const newStr = arrNew.join('\r\n')
  console.log(newStr)
  fs.writeFile('./files/5-new.txt', newStr, function (err) {
    if (err) {
      return console.log('Writing fails!!!' + err.message)
    }
    console.log('Writing succeed!!!')
  })
})
