import express from 'express';
import { getTasks, createTask, getTask, updateTask, deleteTask } from '../controllers/taskControllers.js';
import { createTaskValidation, validate } from '../validators/taskValidator.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(protect);
router.get('/', getTasks);
router.post('/', createTaskValidation, validate, createTask);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
export default router;
