const http = require('http');
const url =  require('url')

const server=http.createServer((req,res)=>{
    if(req.url == '/'){
    res.end('helllooo');
}else if(req.url == '/contact'){
    res.end('contact us');
}else if(req.url == '/about'){
    res.write('about us');
    res.end();
}else{
    res.writeHead(404, {'Content-type' : 'text/html'});
    res.end('404 page not found');
}

});

server.listen(8000,'127.0.0.1', ()=>{
    console.log("listening");
});