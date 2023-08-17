const fs = require('fs')

//reading a file
// let file = fs.readFileSync('f1.txt')
// console.log("Output -> " + file);

//writing a file
// fs.writeFileSync('f2.txt',' adding this through WRITEFILESYNC')     //this overwrites the file
// console.log('file written');

//deleting a file
// fs.unlinkSync('f3.txt')
// console.log('file deleted');

//appending a file
// fs.appendFileSync('f1.txt',' appending using APPENDFILESYNC')
// console.log('file appended');

//If you WRITE/APPEND in a non-existing file, it will create file and write/append in it
fs.writeFileSync('newfile.txt','writing in a new file using WriteFileSync')
console.log('writing completed');