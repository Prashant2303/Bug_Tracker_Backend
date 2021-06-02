import express from 'express';
import cors from 'cors';

import issueRouter from './issueRoutes.js';
import userRouter from './userRoutes.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.listen(PORT, ()=> {
    console.log(`App running on http://localhost:${PORT}`);
})

app.use('/issues',issueRouter);
app.use('/users',userRouter);