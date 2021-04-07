"use strict";

var num = process.argv[2];
var k = process.argv[3];
var totalDigit = Math.floor(Math.log10(num) + 1);
k = k % totalDigit;

if (k < 0) {
  k = k + totalDigit;
}

var pow = Math.pow(10, k);
var firstNumber = num % pow;
var secondNumber = Math.floor(num / pow);
var pow1 = Math.pow(10, totalDigit - k);
var result = firstNumber * pow1 + secondNumber;
console.log(result);