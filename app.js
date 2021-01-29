// 1. getting started with node.js
console.log('Hello to Nodejs from Nic');

// 2. fetching a single module from a file
const mathModules = require('./mathModules');
console.log(mathModules);
console.log(mathModules(9, 9));