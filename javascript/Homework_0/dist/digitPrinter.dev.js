"use strict";

// digit in printers
var num = process.argv[2];

while (num != 0) {
  var rem = num % 10;
  num = Math.floor(num / 10);
  console.log(rem);
}