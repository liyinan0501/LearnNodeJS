// In a Local Module, defult module.exports = {}

// to outside exports
module.exports.username = 'jack'

module.exports.sayHi = function () {
  console.log('Hello')
}

const age = 20
module.exports.age = age
