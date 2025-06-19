import { body, validationResult } from 'express-validator';

// ✅ Reglas para REGISTRO
export const registerValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email is not valid'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

// ✅ Reglas para LOGIN
export const loginValidation = [
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').notEmpty().withMessage('Password is required'),
];

// ✅ Middleware genérico de validación
export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const mensajes = errors.array().map(err => err.msg);
    return res.status(400).json({ errors: mensajes });
  }

  next(); // Continúa al controlador si todo está bien
};
