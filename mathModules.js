const { isModuleDeclaration } = require("@babel/types");

const addition = (num1, num2) => num1 + num2;
const PI = 3.14;
class MathObjects{
  constructor(){
    console.log('object is created');
  }
};

// // * exporting single module from a file 
// module.exports = addition;

// * exporting multiple modules from the same file
module.exports = {addition: addition, PI: PI, MathObjects: MathObjects}