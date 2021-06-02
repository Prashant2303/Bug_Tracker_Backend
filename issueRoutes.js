import express from 'express';
// import { users, issues } from './data.js';

const router = express.Router();

let issues = [
    {
      "id": 1,
      "desc": "On Clicking Delete, the application crashes",
      "severity": "Critical",
      "status": "Open",
      "cdate": "12/02/2021",
      "rdate": "",
      "viewed": 15
    },
    {
      "id": 2,
      "desc": "The heading Add is wrongly displayed as Edit",
      "severity": "Minor",
      "cdate": "12/02/2021",
      "rdate": "03/12/2021",
      "status": "Closed",
      "viewed": 16
    },
    {
      "id": 3,
      "desc": "The payment functionality is missing",
      "severity": "Major",
      "status": "In Progress",
      "cdate": "12/02/2021",
      "rdate": "",
      "viewed": 5
    },
    {
      "desc": "On adding to cart, the item does not get added",
      "severity": "Minor",
      "status": "Open",
      "cdate": "12/02/2021",
      "rdate": "",
      "id": 4,
      "viewed": 33
    },
    {
      "desc": "payment issue",
      "severity": "Major",
      "status": "Closed",
      "cdate": "12/02/2021",
      "rdate": "03/12/2021",
      "id": 5,
      "viewed": 9
    }
  ]

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
    issues = issues.filter(issue=>issue.id!=id)
    console.log(`DELETE /issue/${id} 200`)
    res.status(200).send('Deleted')
})

router.put('/:id',(req, res)=>{
    const { id } = req.params;
    let index = issues.findIndex(issue=>issue.id==id);
    issues[index] = req.body;
    console.log(`PUT /issue/${id} 200`)
    res.status(200).send(issues[index])
})

router.post('/',(req, res)=>{
    issues.push(req.body)
    console.log(`POST /issues 200`)
    res.status(200).send(req.body);
})

export default router;