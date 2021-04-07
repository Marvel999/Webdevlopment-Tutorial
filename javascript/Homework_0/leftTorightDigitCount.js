let num=process.argv[2];
let digit=Math.floor(
    Math.log10(num)
)

let pow=Math.pow(10,digit);

while(pow!=0){
    let  div=Math.floor(num/pow);
    num=Math.floor(num%pow);
    pow=Math.floor(pow/10);
    console.log(div);
}