// Rendhal
let input=process.argv.slice(2);
console.log("input",input);
let options=[];
let filePaths=[];
for(let i=0;i<input.length;i++){
    if (input[i] == "-s" || input[i] == "-b" || input[i] == "-n") {
        options.push(input[i]);
    } else {
        filePaths.push(input[i]);
    }
}

console.log(options);
console.log(filePaths);