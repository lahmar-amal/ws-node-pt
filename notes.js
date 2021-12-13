// core module  fs for file
//require fs

const fs = require("fs");

// sync part

//step 1
// console.log("sync part is starting");
// //step 2
// const data = fs.readFileSync("file.txt");
// console.log(data.toString());
// //step 3
// console.log("sync part has ended");

// Async part
// step 1
console.log("Aync part is starting");
// STEP 3
fs.readFile("file.txt", (err, data) => {
    err ? console.log(err) : console.log(data.toString());
});
// step 2
console.log("Async part has ended");
