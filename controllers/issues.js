import Issue from '../models/Issue.js';

export const getIssues = async (req, res)=>{
    try{
        const issues = await Issue.find()
        console.log('GET /issues 200')
        res.status(200).json(issues)
    }catch(err){
        res.status(500).send(err)
    }
}

export const getIssueById = async (req, res)=>{
    const { id } = req.params;
    try {
        const issue = await Issue.findById(id);
        console.log(`GET /issue/${id} 200`)
        res.status(200).json(issue);
    } catch (err) {
        res.status(500).send(err);
    }
}

export const deleteIssue = async (req, res)=>{
    const { id } = req.params;
    try {
        const issue = await Issue.findById(id);
        if(req.userId === issue.creatorId)
            await Issue.findByIdAndDelete(id);
        else
            res.status(200).json('Unauthorized user');

        console.log(`DELETE /issue/${id} 200`)
        res.status(200).json(issue);
    } catch (err) {
        res.status(500).send(err);
    }
}

export const updateIssue = async (req, res)=>{
    const { id } = req.params;
    try {
        await Issue.findByIdAndUpdate(id, req.body);
        console.log(`PUT /issue/${id} 200`)
        res.status(200).json(req.body);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const createIssue = async (req, res)=>{
    const newIssue = new Issue({
        _id: req.body.id,
        id: req.body.id,
        desc: req.body.desc,
        severity: req.body.severity,
        status: req.body.status,
        cdate: req.body.cdate,
        rdate: req.body.rdate,
        viewed: req.body.viewed,
        title: req.body.title,
        creatorName: req.body.creatorName,
        creatorId: req.body.creatorId,
        selectedFile: req.body.selectedFile
    })

    try{
        const val = await newIssue.save();
        console.log(`POST /issue 200`)
        res.status(200).json(val);
    }catch(err)
    {
        res.status(500).send(err);
    }
}