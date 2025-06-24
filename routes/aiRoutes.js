import express from 'express';
import { suggestTasks } from '../controllers/aiController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/suggest', protect, suggestTasks);

export default router;
