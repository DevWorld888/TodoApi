import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { registerValidation, loginValidation, validate } from '../validators/authValidator.js';

const router = express.Router();

router.post('/register', registerValidation, validate, registerUser);
router.post('/login', loginValidation, validate, loginUser);
// router.post('/login', (req, res) => {
//     res.send('Login route working ✅');
//   });

export default router;
