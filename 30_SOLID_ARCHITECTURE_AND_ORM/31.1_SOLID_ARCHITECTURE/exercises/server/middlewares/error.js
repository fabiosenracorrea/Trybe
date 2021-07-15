import AppError from '../errors/AppError.js';

function errorHandler(err, _, response, __) {
  if (err instanceof AppError) {
    return response.status(err.status).json({ message: err.message });
  }

  console.log(err)

  return response.status(500).json({ Error: 'Internal Server Error' });
}

export default errorHandler;
