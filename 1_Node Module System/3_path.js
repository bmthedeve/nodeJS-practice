const path = require('path')
//Should always use DOUBLE SLASH (\\)in paths in NodeJS
let ext = path.extname('D:\\The Ultimate NodeJS course\\1_Node Module System\\file.txt')
console.log(ext)        //gives extension Name
let baseName = path.basename('D:\\The Ultimate NodeJS course\\1_Node Module System\\file.txt')
console.log(baseName);  //gives File Name(Base Name)

console.log(__filename);    //gives the name of current working file
console.log(__dirname);     //gives the name of current directory

console.log(path.basename(__dirname));