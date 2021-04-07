"use strict";

// count digit in number
var num = process.argv[2];
var count = 0;

while (num != 0) {
  num = Math.floor(num / 10);
  count++;
}

console.log(count);