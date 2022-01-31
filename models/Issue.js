import mongoose from 'mongoose';

const issueSchema = mongoose.Schema({
    _id: Number,
    id: Number,
    desc: String,
    severity: String,
    status: String,
    cdate: String,
    rdate: String,
    viewed: Number
})

const Issue = mongoose.model('Issue', issueSchema);
export default Issue;