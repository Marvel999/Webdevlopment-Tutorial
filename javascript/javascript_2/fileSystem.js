let fs=require('fs');
const { readdirSync } = require('node:fs');
let data=fs.readFileSync('abc.text');
console.log(data.toString());
let wdata="My name is manish";
let udata="My name is Raju ";
// fs.writeFileSync('write.txt',wdata);
//writing data in text
// fs.writeFileSync('abc.text',wdata);
//update file data
fs.appendFileSync('abc.text',udata);
//delete file
// fs.unlinkSync('write.txt');

//make folder
// fs.mkdirSync('Other');


console.log(fs.existsSync('abc.text'));
console.log(fs.existsSync('Other'));

// fs.rmdirSync('Other')