const http = require('http');
const fs = require('fs');
let contenType = require('./mod/contenType.js');
let docMaker = require('./mod/docMaker.js');
let PORT = 2020
let serv = http.createServer(function(request, response){
  // doc make
let main = docMaker()


  // main page
  // check mothod 
  if(request.method==='GET' && request.url=== '/'){
    // err find
    response.writeHead(200, contenType)
    response.end(main);
    } else if(request.method==='GET' && request.url=== '/sofia'){
      // err find
      response.writeHead(200, contenType)
      response.end(sofia);
      };
});



serv.listen(PORT, () => {
  console.log(`
now server is working
please request with this link(Clt + click)
http://localhost:${PORT}`)
}) 