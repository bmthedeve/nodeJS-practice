const os = require('os')

console.log(os.arch())  //architecture (32 or 64)
console.log(os.platform())
console.log(os.networkInterfaces())     //gives the information about network
console.log(os.cpus())  //gives the information about CPU
console.log(os.totalmem())  //gives the information about total memory
console.log(os.freemem())  //gives the information about free memory