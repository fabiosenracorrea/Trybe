import express from 'express';

const operationsRoutes = express.Router();

const operations = {
  sum: (n1, n2) => n1 + n2,
  subtract: (n1, n2) => n1 - n2,
  multiply: (n1, n2) => n1 * n2,
  divide: (n1, n2) => n1 / n2,
}

operationsRoutes.get('/:operation/:num1/:num2', (request, response) => {
  const { operation, num1, num2 } = request.params;

  const operationExecutor = operations[operation];

  if (!operationExecutor) {
    return response.status(400).json({ error: 'Invalid Operation' })
  }

  const result = operationExecutor(Number(num1), Number(num2));

  return response.status(200).json(result);
})

export default operationsRoutes;
