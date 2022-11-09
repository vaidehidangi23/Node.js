const fs = require('fs');//we are storing this core modue(fs) so that we can use all ofits functionalities
//fs.mkdirSync("challenge");
//creating a new file
fs.writeFileSync('bio.txt',"hellllo......");//lengthy process
//similarly we can read,update,create,rename,append.....
fs.appendFileSync('bio.txt','I am Vaidehi!');
//const data = fs.readFileSync('bio.txt', 'utf-8');
//console.log(data)
fs.renameSync('bio.txt','mybio.txt')
fs.unlinkSync('mybio.txt')//to delete thefile