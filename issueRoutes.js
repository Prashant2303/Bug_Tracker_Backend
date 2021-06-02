import express from 'express';
import { read, write } from './io.js';

const router = express.Router();

let jsonData = read();
let issues = jsonData.issues;

router.get('/',(req, res)=>{
    console.log('GET /issues 200')
    res.status(200).send(issues)
})

router.get('/:id',(req, res)=>{
    const { id } = req.params;
    const issue = issues.find(issue=>issue.id==id)
    console.log(`GET /issue/${id} 200`)
    res.status(200).send(issue)
})

router.delete('/:id',(req, res)=>{
    const { id } = req.params;
    issues = issues.filter(issue=>issue.id!=id);
    jsonData.issues = issues;
    write(jsonData, res, `DELETE /issue/${id} 200`, `DELETE /issue/${id} 500`);
})

router.put('/:id',(req, res)=>{
    const { id } = req.params;
    let index = issues.findIndex(issue=>issue.id==id);
    issues[index] = req.body;
    jsonData.issues = issues;
    write(jsonData, res, `PUT /issue/${id} 200`, `PUT /issue/${id} 500`);
})

router.post('/',(req, res)=>{
    issues.push(req.body);
    jsonData.issues = issues;
    write(jsonData, res, `POST /issue 200`, `POST /issue 500`);
})

export default router;