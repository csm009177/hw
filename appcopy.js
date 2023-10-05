const http = require('http');

const serv = http.createServer(function(request, response){
  let hw = `<!DOCTYPE html>
  <html lang="kr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>main</title>
  <style>
    *{background: black; color:aliceblue}
    h1{color:gray}
  </style>
  </head>
  <body>
    <div id="root">
      <h1>Welcome to Main page</h1>
      <div>
        <a href="http://localhost:2023">next</a>
      </div>
    </div>
  </body>
  </html>`

  if(request==="/"){
    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end(hw)
  }
});

serv.listen(2023);
