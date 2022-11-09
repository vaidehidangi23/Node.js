const fs=require('fs');

//fs.mkdirSync("challenge", (err)=>{console.log("folder created")});//to make a folder 

fs.writeFile('bio.txt','helllloooooo',(err)=>{console.log("file created")});
fs.appendFile('bio.txt','I am Vaidehi!',(err)=>{console.log("appended")});
const data = fs.readFile('bio.txt','utf-8',(err,data)=>{console.log(data)});
