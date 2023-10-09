let main = `<!DOCTYPE html>
    <html lang="en">
    <head> <title>main</title>
    </head>  
    <body>  
    <a href="http://localhost:1234/sub">sub</a>
    </body>  </html>`  
    let a = document.getElementById('a');
    a.addEventListener("click", function(){
    const server = http.createServer(function(request, response) {

      if(request.url==="/"){
        response.writeHead(200, {"Content-Type": "text/html"})
        response.end(main);
      }
    }
  server.listen(1234)
  })
