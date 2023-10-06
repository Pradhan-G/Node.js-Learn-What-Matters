let a = 10;
let b = 110;
let c = 11;
let d = 11110;
let e = 1120;

console.log(a,b,c,d,e); // This will work just fine because we created 5 variables in a file and in the same file we are using it ...

// But now lets say that we created something in script2.js and wanted to use it in script1.js .. how would we do that ??? 

// lemme show you how 

// step 1 create the variable in the other file
// step 2 export it from there 
// step 3 import it where you want to use
// step 4 use it as you want.

// Example ==== 

let dataFromK = require('./script2');

console.log(dataFromK);