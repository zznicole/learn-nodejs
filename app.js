//start
console.log("hello world from nic");


// using single module from other file
// const mathModules = require('./mathModules');
console.log(mathModules);
// console.log(mathModules(3, 5));


// using multi modules from other file
console.log(mathModules.sum(3, 5));
console.log(mathModules.PI);
console.log(new mathModules.SomeMathObject);


// using eventEmitter class with in the events module
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// attach a listener to the evenemiter object that we have created in line 15-16 
eventEmitter.on('mathModules', ()=>{
  console.log('mathModules event has executed.');
});