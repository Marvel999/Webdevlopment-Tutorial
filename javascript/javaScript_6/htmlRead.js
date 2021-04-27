const fs=require("fs");
const cheerio=require("cheerio");

let htmlKaData=fs.readFileSync("./index.html");
// console.log(htmlKaData+"");
// file -> htmlFile -> Stringified

// npm-> node package manager
let ch=cheerio.load(htmlKaData);
let h1Element=ch("h1").text();

console.log(h1Element)
