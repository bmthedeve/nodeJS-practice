const fs = require('fs')

//reading a file
// let file = fs.readFileSync('f1.txt')
// console.log("Output -> " + file);

//writing a file
fs.writeFileSync('f2.txt',' adding this through WRITEFILESYNC')     //this overwrites the file
console.log('file written');