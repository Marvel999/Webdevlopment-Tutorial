"use strict";

var num = process.argv[2];
var digit = Math.floor(Math.log10(num));
var pow = Math.pow(10, digit);

while (pow != 0) {
  var div = Math.floor(num / pow);
  num = Math.floor(num % pow);
  pow = Math.floor(pow / 10);
  console.log(div);
}