// digit in printers
let num=process.argv[2];
while(num!=0){
    let rem=num%10;
    num=Math.floor(num/10)
    console.log(rem)
}