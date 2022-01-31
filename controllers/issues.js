import Issue from '../models/Issue.js';

export const getIssues = async (req, res)=>{
    try{
        const issues = await Issue.find()
        console.log('GET /issues 200')
        res.status(200).json(issues)
    }catch(err){
        res.status(500).send('Error '+err)
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
        const issue = await Issue.findByIdAndDelete(id);
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
    // console.log(typeof req.body.id);

    const newIssue = new Issue({
        _id: req.body.id,
        id: req.body.id,
        desc: req.body.desc,
        severity: req.body.severity,
        status: req.body.status,
        cdate: req.body.cdate,
        rdate: req.body.rdate,
        viewed: req.body.viewed
    })

    try{
        const val = await newIssue.save();
        console.log(`POST /issue 200`)
        res.status(200).json(val);
    }catch(err)
    {
        res.status(500).send(`Error ${err}`);
    }
}