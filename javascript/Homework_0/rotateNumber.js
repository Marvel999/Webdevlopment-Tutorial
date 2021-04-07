let num=process.argv[2];
let k=process.argv[3];
let totalDigit=Math.floor(Math.log10(num)+1)
k=k%totalDigit;
if(k<0){
    k=k+totalDigit
}
let pow=Math.pow(10,k);
let firstNumber=num%pow;
let secondNumber=Math.floor(num/pow);
let pow1=Math.pow(10,totalDigit-k);
let result=firstNumber*pow1+secondNumber;
console.log(result);