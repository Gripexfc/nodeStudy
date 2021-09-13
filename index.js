const http = require('http')
const url = require('url')
const fs = require('fs');
const querystring = require('querystring')
const game = require('./game')


http.createServer((request,response)=>{
    const requestUrl = url.parse(request.url)
    response.writeHead(200);
    if (requestUrl.pathname == '/favicon.ico') {
        response.writeHead(200);
        response.end();
        return;
    }
    // if (requestUrl.pathname  == '/') {
    //     fs.createReadStream(__dirname,'./index.html').pite(response)
    // } 
    if (requestUrl.pathname == '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(response);
      }
    if(requestUrl.pathname  == '/game'){
        response.writeHead(200);
        let action = querystring.parse(requestUrl.query).action;
        const tips = game(action);
        response.end(tips)
    }
}).listen(3000,function(){
    console.log('服务端口已启动，请使用localhost:8080')
})

// const game = require('./game.js')
// process.stdin.on('data',(buffer)=>{
//     const action = buffer.toString().trim()
//     game(action)
// })

