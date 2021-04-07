let a=process.argv[2];
let b=process.argv[3];
console.log(gcd(a,b));
function gcd(a,b){
if(a==0){
    return b;
}
return gcd(b%a,a)
}

