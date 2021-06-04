import mongoose from 'mongoose';

const { Schema } = mongoose;
const issueSchema = new Schema({
    _id: Number,
    id: Number,
    desc: String,
    severity: String,
    status: String,
    cdate: String,
    rdate: String,
    viewed: Number
})

export const Issue = mongoose.model('Issue', issueSchema);

const userSchema = new Schema({
    _id: Number,
    fname: String,
    lname: String,
    email: String,
    phone: String,
    pass: String,
    location: String
})

export const User = mongoose.model('User', userSchema);