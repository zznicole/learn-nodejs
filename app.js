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

// // 5. how to work with readline module
// const readline = require('readline');
// const rl = readline.createInterface({input: process.stdin, output: process.stdout});

// let num1 = Math.floor(Math.random() * 10 + 1);
// let num2 = Math.floor(Math.random() * 10 + 1);
// let answer = num1 * num2;

// rl.question(`What is ${ num1 } * ${ num2 } ? \n`, 
//             (userInput)=> {
//               if(userInput.trim() == answer) {
//                 rl.close();
//               } 
//               else {
//                 rl.setPrompt('Incorrect, please try again \n');
//                 rl.prompt();
//                 rl.on('line', (userInput) => {
//                   if(userInput.trim() == answer){
//                     rl.close();
//                   } 
//                   else{
//                   rl.setPrompt('Incorrect, please try again. \n');
//                   rl.prompt();
//                   }
//                 });
//               }
// });
              
// rl.on('close', ()=> { console.log('Congrats! Your answer is right.');
// });
            
// // 6. how to use the file system module to create and read a file

//const fs = require('fs');

// // create a file
// fs.writeFile('fileSystem.js', 'This file is created by Node js.', (err)=>{
//   if(err){ 
//     console.log(err);
//   }
//   else {
//     console.log('File is created successfully.');
//     // read a file
//     fs.readFile('fileSystem.js','utf8',(err,file)=>{
//       if(err)
//       console.log(err);
//       else {
//         console.log(file);
//       }
//     })
//   }
// });

// // 6.1. rename a file

//const fs = require('fs');
// fs.rename('fileSystem.js','fileSystemRename.js',(err)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log('The file is renamed successfully.')
//   }
//   });

// // 6.2 add more data at end of the file

//const fs = require('fs');
// fs.appendFile('fileSystemRename.js',' Appending more data',(err)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log('File is appended with some new data successfully.');
//   }
// });

// // 6.3 delete a file

//const fs = require('fs');
// fs.unlink('fileSystemRename.js',(err)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log('The file is successfully deleted');
//   }
// });
 
// // 6.4 create and delete a folder, create a file inside a folder


//const fs = require('fs');
// fs.mkdir('fileSystemFolder',(err)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log('Successfully created a folder');
//     fs.rmdir('fileSystemFolder',(err)=>{
//       if(err){
//         console.log(err);
//       } else {
//         console.log('The folder is deleted successfully.');
//       }
//     })
//   }
// })

// // 6.5 create a file inside a folder and delete the nonempty folder 


//const fs = require('fs');
// fs.mkdir('fileSystemFolder',(err)=>{
//   if(err){
//     console.log(err);``
//   } else {
//     console.log('Successfully created a folder');
//     fs.writeFile('./fileSystemFolder/index.html','<!DOCTYPE html>',(err)=>{
//       if(err){
//         console.log(err);
//       } else {
//         console.log('A file is successfully created inside of the fileSystemFolder folder.');
//       }
//     })
//     fs.unlink('./fileSystemFolder/index.html', (err)=>{
//       if(err){
//         console.log(err);
//       } else {
//         console.log('The file is successfully deleted.');
//       }
//     })
//     fs.rmdir('fileSystemFolder',(err)=>{
//       if(err){
//         console.log(err);
//       } else {
//         console.log('The folder is deleted successfully.');
//       }
//     })
//   }
// })

// // 6.6 steps to delete a folder which contents multiple files 
// // --create a folder and create two files within the folder

//const fs = require('fs');
// fs.mkdir('multiFilesFolder', (err)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log('Successfully created folder');
//     fs.writeFile('./multiFilesFolder/firstFile.txt','Hello from the first file!',(err)=>{
//       if(err){
//         console.log(err);
//       } else{
//         console.log('The first file is created.');
//       }
//     });
//     fs.writeFile('./multiFilesFolder/secondFile.txt','Hello from the second file!',(err)=>{
//       if(err){
//         console.log(err);
//       } else{
//         console.log('The second file is created.');
//       }
//     });
//   }
// });

// // --read files and delete files in the folder in loop
// fs.readdir('multiFilesFolder',(err,files)=>{
//   if(err){
//     console.log(err);
//   } else{
//     console.log(files);
//     for(let file of files){
//       fs.unlink('./multiFilesFolder/' + file, (err)=>{
//         if(err){
//           console.log(err);
//         } else{
//           console.log('Files in the folder are successfully deleted.')
//         }
//       });
//     }
//   }
// });
// // --delete the empty folder 
// fs.rmdir('multiFilesFolder', (err)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log('The folder is successfully deleted.');
//   }
// });

// // 6.7 read and write streams

// const fs = require('fs');
// fs.writeFile('./bigFile1.txt','This file is protending to be big.',(err)=> console.log(err));
// fs.writeFile('./hugeFile1.txt','This file is protending to be huge.',(err)=> console.log(err));
// const readStream = fs.createReadStream('./bigFile1.txt','utf8');
// const writeStream = fs.createWriteStream('./bigFile2.txt');
// readStream.on('data',(chunk)=>{
//   writeStream.write(chunk);
// })

// // 6.8 Pipe and Pipe chainning

// const fs = require('fs');
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const gunzip = zlib.createGunzip();
// fs.writeFile('./hugeFile1.txt','This file is protending to be huge.',(err)=> console.log(err));
// const readStream1 = fs.createReadStream('./hugeFile1.txt', 'utf8');
// const writeStream1 = fs.createWriteStream('./hugeFile2.txt.gz');
// const readStream2 = fs.createReadStream('./hugeFile2.txt.gz');
// const writeStream2 = fs.createWriteStream('./uncompressedHugeFile2.txt');

// readStream1.pipe(gzip).pipe(writeStream1); //the source srteam is readStream1, and the destination is wrtieSteam1
// readStream2.pipe(gunzip).pipe(writeStream2); // gzip is to compress the file, and gunzip is to uncompress it

// // 7. http module, to create a http server
// const http = require('http');
// const server = http.createServer((req, res)=>{
//   if (req.url === '/') {                        // send request if it's the root domain
//     res.write('The response from server on the root domain.');     // the response
//     res.end();                                  // send to user
//   }
//   else{
//     res.write('not using the root domain.');
//     res.end();
//   }
    
// });
// server.listen('3000');   //listen on port 3000

// // 8. using http and file system modules to serve static files
// const http = require('http');
// const fs = require('fs');
// http.createServer((req,res) => {
//   const readStream = fs.createReadStream('./staticFolder/index.html');
//   res.writeHead(200,{'Content-type': 'text/html'});
//   readStream.pipe(res);
//   ////or 
//   // const readStream = fs.createReadStream('./staticFolder/static.json');
//   // res.writeHead(200,{'Content-type': 'application/json'});
//   // readStream.pipe(res);
//   ////or 
//   // const readStream = fs.createReadStream('./staticFolder/image.png');
//   // res.writeHead(200,{'Content-type': 'image/png'});
//   // readStream.pipe(res);
// }).listen(3000);

// 9. using npm init to create package.json, and npm install to install or npm uninstall to uninstall external packages 
//    -- run npm init in terminal, will initalize a package.json file that holds all metadata for the project, 
//       such as the name of the project, the version number. 
//    -- run npm install to install or npm uninstall to uninstall the node module packages 
