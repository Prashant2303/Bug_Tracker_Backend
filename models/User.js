import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    _id: Number,
    fname: String,
    lname: String,
    email: String,
    phone: String,
    pass: String,
    location: String
})

const User = mongoose.model('User', userSchema);
export default User;