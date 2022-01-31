import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import issueRouter from './routes/issueRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello to Bug Tracker API');
})

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

app.use('/issues',issueRouter);
app.use('/users',userRouter);