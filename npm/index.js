const validator = require('validator');

const res=validator.isEmail('foobar.com');
console.log(res);