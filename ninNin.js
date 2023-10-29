const http = require('http');

const ninNin = http.createServer((request, response)=> {
  if(request.method==='GET' && request.url==='/'){
    response.end('맞다');
  } else if(request.method==='GET' && request.url==='/wrong'){
    response.end('아니다');
  } else if(request.method==='POST'){
    response.end('모르겠다');
  }
})

let wakgood = 8282;
ninNin.listen(wakgood, ()=>{
console.log(`http://localhost:${wakgood}`)
});



