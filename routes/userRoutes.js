import express from 'express';
import { getUsers, createUser } from '../controllers/users.js';
import { signin, signup } from '../controllers/usersJwt.js'; 
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/signin', signin);
router.post('/signup', signup);

export default router;