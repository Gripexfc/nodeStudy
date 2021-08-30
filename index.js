const http = require('http')
const url = require('url')

http.createServer((request,response)=>{
    const requestUrl = url.parse(request.url)
    response.writeHead(200);
    if (requestUrl.pathname  == '/') {
        console.log('/')
    } else if(requestUrl.pathname  == '/game'){
        console.log('/game')
    }
}).listen(8080,function(){
    console.log('服务端口已启动，请使用localhost:8080')
})

const game = require('./game.js')
process.stdin.on('data',(buffer)=>{
    const action = buffer.toString().trim()
    game(action)
})

