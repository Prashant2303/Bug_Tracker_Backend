import express from 'express';
import { read, write } from './io.js';

const router = express.Router();

let jsonData = read();
let users = jsonData.users;

router.get('/',(req, res)=>{
    console.log(`GET /users 200`)
    res.status(200).send(users)
})

router.post('/',(req, res)=>{
  users.push(req.body)
  jsonData.users = users;
  write(jsonData, res, `POST /users 200`,`POST /users 500`)
})

export default router;