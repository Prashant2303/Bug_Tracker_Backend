import express from 'express';
import { users, issues } from './data.js';

import router from './routes.js';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/issues',router);

app.listen(PORT, ()=> {
    console.log(`App running on http://localhost:${PORT}`);
})

app.get('/users',(req, res)=>{
    res.status(200).send(users)
})

