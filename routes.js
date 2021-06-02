import express from 'express';
import { users, issues } from './data.js';

const router = express.Router();

router.get('/',(req, res)=>{
    res.status(200).send(issues)
})

router.get('/:id',(req, res)=>{
    const { id } = req.params;
    const issue = issues.find(issue=>issue.id==id)
    console.log(id);
    res.status(200).send(issue)
})

router.post('/',(req, res)=>{
    issues.push(req.body)
    res.send(
        req.body
    );
})

export default router;