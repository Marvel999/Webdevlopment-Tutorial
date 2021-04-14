// Make array in javascript
let yourArray=["Manish",29,true,"RAju",false]; 


// Set value in Array in javascript
let myArray = ["a", "b", "c", "d"];
myArray[1]=true;
console.log(myArray);


// unshift and push in javascript
function mixedNumbers(arr) {
  // Add element in begining
arr.unshift('I', 2, 'three');
// Add element in end of array
arr.push(7, 'VIII', 9);
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

//shift and pop function in javascript
function popShift(arr) {
  let popped=arr.pop(); 
  let shifted=arr.shift(); 
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));





