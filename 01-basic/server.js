const os = require('os');
const path = require('path');


//===============================
//importing module method 1
// const math = require('./math'); // ./math checks in this file's(server.js) folder for math.js

// console.log(math.add(2,3));
//===============================
//method 2
const { add, substract} = require('./math'); // ./math checks in this file's(server.js) folder for math.js

console.log(add(2,3));
console.log(substract(2,3));


//===============================
//absolute basics
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(path.dirname(__dirname));
// console.log(path.dirname(__filename));
// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
//console.log(path.parse(__filename));
