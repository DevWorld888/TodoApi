import express from 'express';
import 'dotenv/config';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import aiRoutes from './routes/aiRoutes.js';
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());
connectDB();

// Basic route
app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to the API',
        port: process.env.PORT || 3000
    });
});
app.get('/test', (req, res) => {
    res.send('✅ Express is working');
  });
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use(errorHandler);  
// Start server
const PORT = process.env.PORT || 3000; // Will read from .env file
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});