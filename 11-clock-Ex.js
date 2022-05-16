const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(
  path.join(__dirname, './11-clock-Ex-files/indexOld.html'),
  'utf8',
  function (err, dataStr) {
    if (err) {
      return console.log('Reading HTML fails!!' + err.message)
    }
    console.log('Reading HTML succeeds!!')
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
  }
)

function resolveCSS(htmlStr) {
  const r1 = regStyle.exec(htmlStr)
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  fs.writeFile(
    path.join(__dirname, './11-clock-Ex-files/index.css'),
    newCSS,
    function (err) {
      if (err) {
        return console.log('Writing CSS fails!!' + err.message)
      }
      console.log('Writing CSS succeed!!')
    }
  )
}

function resolveJS(htmlStr) {
  const r2 = regScript.exec(htmlStr)
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  fs.writeFile(
    path.join(__dirname, './11-clock-Ex-files/index.js'),
    newJS,
    function (err) {
      if (err) {
        return console.log('Writing JS fails!!' + err.message)
      }
      console.log('Writing JS succeed!!')
    }
  )
}

function resolveHTML(htmlStr) {
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
    .replace(regScript, '<script src="./index.js"></script>')
  fs.writeFile(
    path.join(__dirname, './11-clock-Ex-files/index.html'),
    newHTML,
    function (err) {
      if (err) {
        return console.log('Writing HTML fails!!' + err.message)
      }
      console.log('Writing HTML succeed!!')
    }
  )
}
