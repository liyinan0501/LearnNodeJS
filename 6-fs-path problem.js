// fs-path problem
// When below codes run, node will excute the path according to at where you excute node command
// in terminal dynamicly put together with the path of the file you want handle (./files/1.txt)
// resolution: using absolute path instead of relative path
// 代码运行的时候，会以执行node命令时所处的目录，动态拼接出被操作文件的完整路径。
// 解决方法：用绝对路径，不用相对路径
//---------------------------------------------------------------------------------------------------
// relative path:  -- will cause problem
// const fs = require('fs')
// fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
//   if (err) {
//     return console.log('Read fails!!!' + err.message)
//   }
//   console.log('Read succeed!' + dataStr)
// })

// using node terminal at the place of Desktop
// yinanli@Yinans-MBP Desktop % node ./LearnNodeJS/index.js
// Read fails!!!ENOENT: no such file or directory, open './files/1.txt'
//---------------------------------------------------------------------------------------------------
// absolute path:  -- resolution
// poor portability， against maintenance
const fs = require('fs')
fs.readFile(
  '/Users/yinanli/Desktop/LearnNodeJS/files/1.txt',
  'utf8',
  function (err, dataStr) {
    if (err) {
      return console.log('Read fails!!!' + err.message)
    }
    console.log('Read succeed!' + dataStr)
  }
)

// using node terminal at the place of Desktop
// yinanli@Yinans-MBP Desktop % node ./LearnNodeJS/index.js
// Read succeed!this is read text.
//---------------------------------------------------------------------------------------------------
