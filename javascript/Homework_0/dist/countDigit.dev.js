"use strict";

// count digit in number
var num = process.argv[2];
var count = 0;
var temp = num;

while (num != 0) {
  num = Math.floor(num / 10);
  count++;
}

console.log(count);
console.log(parseInt(Math.log10(temp) + 1));