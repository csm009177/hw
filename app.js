import http from 'http';
import fs from 'fs';
import {contenType} from './mod/contenType.js';
import {rootRout} from './rootRout.js';

let PORT = 2318;
let serv = http.createServer((req,res)=>{
  rootRout(req, res, contenType)
});


serv.listen(PORT, () => {
  console.log(`
  now server is working
  please request with this link(Clt + click)
  http://localhost:${PORT}`)
}) 