import User from '../models/User.js';

export const getUsers = async (req, res)=>{
    try {
        const dbusers = await User.find();
        console.log('GET /users 200');
        res.status(200).json(dbusers);
    } catch (err) {
        console.log('GET /users 500');
        res.status(500).send(err);
    }
}

export const createUser = async (req, res)=>{
    const newUser = new User({
      _id: req.body.id,
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phone: req.body.phone,
      pass: req.body.pass,
      location: req.body.location
    })
    console.log(newUser);
    try {
      const val = await newUser.save();
      console.log('POST /users 200');
      res.status(200).json(val);
    } catch (err) {
      console.log('POST /users 500');
      res.status(500).send(err);
    }
}