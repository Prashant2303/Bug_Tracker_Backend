import express from 'express';
import mongoose from 'mongoose';
import { User } from './model.js';

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
    try {
        const dbusers = await User.find();
        console.log('GET /users 200');
        res.status(200).json(dbusers);
    } catch (err) {
        console.log('GET /users 500');
        res.status(500).send(err);
    }
})

router.post('/', async (req, res)=>{
    const newUser = new User({
      _id: req.body.id,
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phone: req.body.phone,
      pass: req.body.pass,
      location: req.body.location
    })

    try {
      const val = await newUser.save();
      console.log('POST /users 200');
      res.status(200).json(val);
    } catch (err) {
      console.log('POST /users 500');
      res.status(500).send(err);
    }
})

export default router;