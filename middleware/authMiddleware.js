import jwt from 'jsonwebtoken';
import User from '../models/Users.js';
const protect = async (req, res, next) => {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
        req.user = await User.findById(decoded.id).select('-password');
        next();
      } catch (err) {
        res.status(401).json({ message: 'Token invalid or expire' });
      }
    } else {
      res.status(401).json({ message: 'No autorizado, token no encontrado' });
    }
  };
  
  export default protect;