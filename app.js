const http = require('http');

const serv = http.createServer(function(request, response){
  let hw = `<!DOCTYPE html>
  <html lang="kr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HW</title>
  <style>
    *{background: black; color:aliceblue}
    h1{color:gray}
  </style>
  </head>
  <body>
    <div id="root">
      <h1>Welcome to HW page</h1>
      <button><a href="http://localhost:1234/cpu">cpu</a>
      </button>
      <button><a href="http://localhost:1234/mainboard">mainboard </a>
      </button>
      <button><a href="http://localhost:1234/power">power</a>
      </button>
      <button><a href="http://localhost:1234/ram">ram</a>
      </button>
      <button><a href="http://localhost:1234/ssd">ssd</a>
      </button>
      <button><a href="http://localhost:1234/hdd">hdd</a>
      </button>
    </div>
  </body>
  </html>`

  let cpu = `<!DOCTYPE html>
  <html lang="kr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cpu</title>
  <style>
    *{background: black; color:aliceblue}
    h1{color:gray}
  </style>
  </head>
  <body>
    <div id="root">
      <h1>cpu</h1>
      <button>
        <a href="http://localhost:1234">main</a>
      </button>
    </div>
  </body>
  </html>`

  let mainboard = `<!DOCTYPE html>
  <html lang="kr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mainboard</title>
  <style>
    *{background: black; color:aliceblue}
    h1{color:gray}
  </style>
  </head>
  <body>
    <div id="root">
      <h1>mainboard</h1>
      <button>
        <a href="http://localhost:1234">main</a>
      </button>
    </div>
  </body>
  </html>`

  let power = `<!DOCTYPE html>
  <html lang="kr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>power</title>
  <style>
    *{background: black; color:aliceblue}
    h1{color:gray}
  </style>
  </head>
  <body>
    <div id="root">
      <h1>power</h1>
      <button>
        <a href="http://localhost:1234">main</a>
      </button>
    </div>
  </body>
  </html>`



  if(request==="/"){
    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end(hw)
  }
  if(request==="/cpu"){
    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end(cpu)
  }
  if(request==="/mainboard"){
    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end(mainboard)
  }
  if(request==="/power"){
    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end(power)
  }
  
});

serv.listen(1234);
