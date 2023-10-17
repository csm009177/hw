const http = require('http');
const http = require('fs');
let ContentType = require('./mod/ContentType.js')

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
    <div><a href="http://localhost:1234/sofia"></a></div>
    </div>
    </body>
    </html>`
  // check mothod 
  if(request.method==='GET' && request.url=== '/'){
    // err find
    if (err) {
      console.log('err exist');
    } else { 
    response.writeHead(200, ContentType)
  response.end(main);

  }}})


let PORT = 2020
serv.listen(PORT, () => {
  console.log(`
now server is working
please request with this link(Clt + click)
http://localhost:${PORT}`)
}) 