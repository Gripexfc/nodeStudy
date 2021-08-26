const http = require('http')

http.createServer((request,response)=>{
    response.writeHead(200);
    response.end('hollow word')
}).listen(8080,function(){
    console.log('服务端口已启动，请使用localhost:8080')
})