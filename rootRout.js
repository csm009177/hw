import http from 'http';
import {contenType} from './mod/contenType.js';

export function rootRout(req, res, contenType){
  if(req.method==='GET' && req.url==="/"){
    res.writeHead(200, contenType)
    res.end('hello')
  }
}