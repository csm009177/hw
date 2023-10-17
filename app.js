const http = require('http');
const fs = require('fs');
let contenType = require('./mod/contenType.js');
let PORT = 2020
let serv = http.createServer(function(request, response){
  // doc make
  let main = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>main</title>
  </head>
  <body>
  <div id="root">
    <h1>Welcome to main</h1>
    <div><a href="http://localhost:${PORT}/sofia">sofia</a></div>
    </div>
    </body>
    </html>`

  let sofia = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>main</title>
  </head>
  <body>
  <div id="root">
    <h1>Welcome to main</h1>
    <div><a href="http://localhost:${PORT}/">main</a></div>
    </div>
    </body>
    </html>`
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