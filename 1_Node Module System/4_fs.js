const fs = require('fs')

//reading a file
let file = fs.readFileSync('f1.txt')
console.log("Output -> " + file);