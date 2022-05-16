const m = require('./23-module.exports2')
console.log(m)
// only print:
// { nickname: 'tom', sayHello: [Function: sayHello] }
// because above is a new object in the file of 23-module.exports2, which will cover the username and sayHi.
