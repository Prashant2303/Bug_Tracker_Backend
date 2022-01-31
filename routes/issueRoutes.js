import express from 'express';
import { getIssues, getIssueById, updateIssue, deleteIssue, createIssue } from '../controllers/issues.js';

const router = express.Router();

router.get('/', getIssues);
router.get('/:id', getIssueById);
router.delete('/:id', deleteIssue);
router.put('/:id', updateIssue);
router.post('/', createIssue);

export default router;