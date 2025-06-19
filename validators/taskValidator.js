import { body, validationResult } from 'express-validator';
// ✅ Reglas de validación para crear tarea
export const createTaskValidation = [
    body('title')
      .notEmpty()
      .withMessage('title is required')
      .isLength({ min: 3 })
      .withMessage('title must be at least 3 characters long'),
  ];

  // ✅ Middleware para manejar errores de validación
export const validate = (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      const mensajes = errors.array().map(err => err.msg);
      return res.status(400).json({ errors: mensajes });
    }
  
    next(); // Todo bien, sigue al controller
  };