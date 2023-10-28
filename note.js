const http = require('http')

let main = `<!DOCTYPE html>
    <html lang="en">
    <head> <title>main</title>
    </head>  
    <body>  
    <a href="http://localhost:1234/sub">sub</a>
    </body>  </html>`  
let sub = `<!DOCTYPE html>
    <html lang="en">
    <head> <title>sub</title>
    </head>  
    <body>  
    <a href="http://localhost:1234/">main</a>
    </body>  </html>`  


    const server = http.createServer((request, response)=>{
      if(request.method==='GET'&&request.url==="/"){
        response.writeHead(200, {"Content-Type": "text/html"})
        response.end(main);
        let a = document.getElementById('a');
      } else if(request.method==='GET'&&request.url==='sub'){
        console.log(request.method)
        console.log(request.url)
      }
})


let port =2315
server.listen(port, ()=> {
console.log(`serv is running
http://localhost:${port}
`)
})
