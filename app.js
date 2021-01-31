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

// // 3. how to work with EventEmitter
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('mathModules', (num1, num2) => console.log(num1 + num2) );
// eventEmitter.emit('mathModules',1,2);

// // 4. how to use the benefit of EventEmitter to create customized objects
// class Person extends EventEmitter{
//   constructor(name){
//     super();
//     this._name = name;
//   }

//   get name(){
//     return this._name;
//   }
// }

// let nic = new Person('Nic');
// let emma = new Person('Emma');

// nic.on('name', ()=> console.log('Hi, my nam is ' + nic.name + ','));
// emma.on('name', ()=> console.log('and this is my friend ' + emma.name + '.'));
// // it works sychronously when emitting an event to occure 
// nic.emit('name');
// emma.emit('name');

// 5. how to work with readline module
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 * num2;

rl.question(`What is ${ num1 } * ${ num2 } ? \n`, 
            (userInput)=> {
              if(userInput.trim() == answer) {
                rl.close();
              } 
              else {
                rl.setPrompt('Incorrect, please try again \n');
                rl.prompt();
                rl.on('line', (userInput) => {
                  if(userInput.trim() == answer){
                    rl.close();
                  } 
                  else{
                  rl.setPrompt('Incorrect, please try again. \n');
                  rl.prompt();
                  }
                });
              }
});
              
rl.on('close', ()=> { console.log('Congrats! Your answer is right.');
});
            
            
