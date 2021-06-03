import mongoose from 'mongoose';

const { Schema } = mongoose;
const issueSchema = new Schema({
    _id: Number,
    desc: String,
    severity: String,
    status: String,
    cdate: String,
    rdate: String,
    viewed: Number
})

export const Issue = mongoose.model('Issue', issueSchema);