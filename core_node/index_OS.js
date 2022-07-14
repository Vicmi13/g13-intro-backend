const OS = require("os");

// variables globales en el server

console.log("dirname", __dirname);

console.log("filenae", __filename);

// console.log("process", process.env);

console.log("free memory since NODE 😎", OS.freemem());
console.log("total memory", OS.totalmem());
