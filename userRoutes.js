import express from 'express';
const router = express.Router();

let users = [
    {
      "id": 1,
      "fname": "Tony",
      "lname": "Stark",
      "email": "pk@123.com",
      "phone": "1234567890",
      "pass": "123456",
      "location": null
    },
    {
      "fname": "Steve",
      "lname": "Rogers",
      "email": "captain.america@gmail.com",
      "phone": "",
      "pass": "captainamerica",
      "location": "",
      "id": 2
    }
  ]

router.get('/',(req, res)=>{
    console.log(`GET /users 200`)
    res.status(200).send(users)
})

router.post('/',(req, res)=>{
  users.push(req.body)
  console.log(`POST /users 200`)
  res.status(200).send(req.body);
})

export default router;