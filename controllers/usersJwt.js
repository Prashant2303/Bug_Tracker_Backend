import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/UserNew.js';

export const signin = async (req, res) => {
    console.log('In signin ',req.body);
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        console.log('EXISTING USER ', existingUser);
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        console.log('IS PWD CORRECT ', isPasswordCorrect);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });
        console.log('Login request successful');
        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        console.log('Login request unsuccessful');
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        console.log('Existing user ', existingUser);
        if (existingUser) return res.status(400).json({ message: "User already exists" });
    
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            name: `${firstName} ${lastName}`,
            email: email,
            password: hashedPassword
        })
        const result = await newUser.save();
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });
        console.log('Signup request successful');
        res.status(200).json({ result, token });
    } catch (err) {
        console.log('Signup request unsuccessful ',err);
        res.status(500).json({ message: 'Something went wrong.' });
    }
}