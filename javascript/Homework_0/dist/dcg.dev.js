"use strict";

var a = process.argv[2];
var b = process.argv[3];
console.log(gcd(a, b));

function gcd(a, b) {
  if (a == 0) {
    return b;
  }

  return gcd(b % a, a);
}