//provides utilities for working with path and director path
const path= require('path');

console.log(path.dirname('C:/Users/Dell/Desktop/nodejs/PathModule/path.js'));
console.log(path.extname('C:/Users/Dell/Desktop/nodejs/PathModule/path.js'));
console.log(path.basename('C:/Users/Dell/Desktop/nodejs/PathModule/path.js'));

console.log(path.parse('C:/Users/Dell/Desktop/nodejs/PathModule/path.js'));//returns significant elements of path
