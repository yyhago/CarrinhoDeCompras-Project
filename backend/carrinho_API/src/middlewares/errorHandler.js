// Middleware de tratamento de erros
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    error: 'Ocorreu um erro interno no servidor.',
    message: err.message,
  });
}

export { errorHandler };
