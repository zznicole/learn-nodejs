// // getting started with node.js
// console.log('Hello to Nodejs from Nic');

// // 1. fetching a single module from a file
// const mathModules = require('./mathModules');
// console.log(mathModules);
// console.log(mathModules(9, 9));

// // 2. fetching multiple moduels from a file
// const { MathObjects } = require('./mathModules');
// const mathModules = require('./mathModules');
// console.log(mathModules.addition(2,7));
// console.log(mathModules.PI);
// console.log(new MathObjects());

// 3. how to work with EventEmitter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('mathModules', (num1, num2) => console.log(num1 + num2) );
eventEmitter.emit('mathModules',1,2);


