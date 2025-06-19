const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
  
    res.status(statusCode).json({
      message: err.message || 'Error interno del servidor',
      statusCode,
      stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    });
  };
  
  export default errorHandler;
  