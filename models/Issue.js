import mongoose from 'mongoose';

const issueSchema = mongoose.Schema({
    _id: Number,
    id: Number,
    desc: String,
    severity: String,
    status: String,
    title: String,
    creatorName: String,
    creatorId: String,
    cdate: String,
    rdate: String,
    viewed: Number,
    selectedFile: String
})

const Issue = mongoose.model('Issue', issueSchema);
export default Issue;