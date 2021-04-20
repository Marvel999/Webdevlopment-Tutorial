// Rendhal
let fs=require("fs");
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

//Check file is exit or not.
for(let i=0;i<filePaths.length;i++){
    let fileExist=fs.existsSync(filePaths[i]);
    if(fileExist==false){
      console.log("File: "+filePaths[i]+" does not exist");
      return;
    }
}

let content="";
for(let i=0;i<filePaths.length;i++){
    let read= fs.readFileSync(filePaths[i],"utf-8");
    content+=read+"\n";
   
}
console.log(content);



