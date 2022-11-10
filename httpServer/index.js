const fs = require('fs');
const http = require('http');
const url =  require('url')

const server=http.createServer((req,res)=>{

    const data = fs.readFileSync(`${__dirname}/userAPI/api.json`,"utf-8");
    const objdata= JSON.parse(data);
    

    if(req.url == '/'){
    res.end('helllooo');
}else if(req.url == '/contact'){
    res.end('contact us');
}else if(req.url == '/about'){
    res.write('about us');
    res.end();
}else if(req.url == '/api'){
    res.writeHead(200, {'Content-type' : 'text/json'});
    res.end(objdata[0].name);
}else{
    res.writeHead(404, {'Content-type' : 'text/html'});
    res.end('404 page not found');
}

});

server.listen(8000,'127.0.0.1', ()=>{
    console.log("listening");
});