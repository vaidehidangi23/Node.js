const fs = require('fs');
const http = require('http');
const { Stream } = require('stream');

const server = http.createServer();

server.on('request',(req,res)=>{
const rstream = fs.createReadStream('input.txt');
//1st way
//rstream.on('data',(chunkdata)=>{
//    res.write(chunkdata);
//});
//rstream.on('end',() => {
//    res.end();
//});
//rstream.on('error',(err) => {
//    console.log(err);
//    res.end('file not found');
//});

//2nd way
rstream.pipe(res);
});

server.listen(8000, '127.0.0.1' );