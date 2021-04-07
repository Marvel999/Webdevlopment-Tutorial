// isPrime Number
let num=process.argv[2];
let isprime=true;
for(let i=2;i*i<=num;i++){
    if(num%i==0){
     isprime=false;
     break;
    }
}
if(isprime)
    console.log("Prime");
else
    console.log("Not Prime");
