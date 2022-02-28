import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: String,
    name: String,
    email: String,
    password: String,
})

const User = mongoose.model('SecureUser', userSchema);
export default User;