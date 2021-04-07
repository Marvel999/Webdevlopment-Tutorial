//Print fibbonaci in js
var n=process.argv[2];
var a=0;
var b=1;
for(let i=0;i<n;i++){
    console.log(a);
    let c=a+b;
    a=b; b=c;
}