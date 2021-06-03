import express from 'express';

import mongoose from 'mongoose';
import { Issue } from './model.js';

const uri = "mongodb+srv://Bug_Tracker:Lamb0mongodb@cluster0.zdte4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log('Connected');
//   client.close();
// });

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection

con.on('open', ()=>{
    console.log('Connected...')
})

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        console.log('GET /issues 200')
        const dbissues = await Issue.find()
        console.log(dbissues)
        res.status(200).json(dbissues)
    }catch(err){
        res.send('Error '+err)
    }
})

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    try {
        const issue = await Issue.findById(id);
        console.log(`GET /issue/${id} 200`)
        res.status(200).json(issue);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.delete('/:id', async (req, res)=>{
    const { id } = req.params;
    try {
        const issue = await Issue.findByIdAndDelete(id);
        console.log(`DELETE /issue/${id} 200`)
        res.status(200).json(issue);
    } catch (err) {
        res.send(err);
    }
})

router.put('/:id', async (req, res)=>{
    const { id } = req.params;
    try {
        await Issue.findByIdAndUpdate(id, req.body);
        console.log(`PUT /issue/${id} 200`)
        res.status(200).json(req.body);
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res)=>{
    // console.log(typeof req.body.id);

    const newIssue = new Issue({
        _id: req.body.id,
        desc: req.body.desc,
        severity: req.body.severity,
        status: req.body.status,
        cdate: req.body.cdate,
        rdate: req.body.rdate,
        viewed: req.body.viewed
    })

    try{
        const val = await newIssue.save();
        console.log(`POST /issue 200`)
        res.status(200).json(val);
    }catch(err)
    {
        res.status(500).send(`Error ${err}`);
    }
})

export default router;