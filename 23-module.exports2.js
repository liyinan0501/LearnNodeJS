module.exports.username = 'jack'

module.exports.sayHi = function () {
  console.log('Hello')
}

const age = 20
module.exports.age = age

// module.exports indicates a new object
module.exports = {
  nickname: 'tom',
  sayHello() {
    console.log('Hello!!!')
  },
}
