// console.log(exports)

// console.log(module.exports)

// // exports and module.exports indicate the same object
// console.log(exports === module.exports) //ture

const username = 'jack'

exports.username = username
module.exports.age = 20
exports.sayHello = function () {
  console.log('Hello')
}

// ***** the file always exports the object which the module.exports indicates *****

// Example 1:
// exports.username = 'zs'
// module.exports = {
//   gender: 'female',
//   age: 22,
// }
// this file only exports {gender: 'female', age: 22,}, will give up the exports indicating username = 'zs'

// Example 2:
// module.exports.username = 'zs'
// exports = {
//   gender: 'female',
//   age: 22,
// }
// this file only exports {username = 'zs'}, will give up the exports indicating {gender: 'female', age: 22}

// Example 3:
// exports.username = 'zs'
// module.exports.gender = 'female'
// this file exports {username = 'zs', gender: 'female'}
// They didn't indicate different object, they still indicate to same object.

// Example 4:
// exports = {
//   username: 'zs',
//   gender: 'female',
// }
// module.exports = exports
// module.exports.age = 22
// this file exports {username = 'zs', gender: 'female', age: 22}

// ***** Trying best DO NOT using both exports and module.exports in a same file *****
