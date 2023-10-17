const http = require('http');

let serv = http.createServer(function(request, response){
  // check mothod 
  if(request.method==='GET' && request.url=== '/'){
  response.writeHead((err) {
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
    // err find
    if (err) {
      console.log('err exist');
    } else { 
      response.end(main)
    }
    }
});

  if(response.url === "/"){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(main);
  }

})


let PORT = 2020
serv.listen(PORT, () => {
  console.log(`
now server is working
please request with this link(Clt + click)
http://localhost:${PORT}`)
}) 