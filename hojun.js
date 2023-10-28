// 인터넷 : 규칙
const http = require('http');
const contenType = require('./mod/contenType');
// let doc = require('/index.html');

const serv = http.createServer((req, res)=> {
  if(req.method==='GET' && req.url==='/'){
    console.log(req.method);
    console.log(req.url);
    res.writeHead(200, contenType);
    res.end('doc');
  } else if( console.log('bye'))
})

serv.listen(2316, ()=>{
console.log(`
http://localhost:2316
`)
});



