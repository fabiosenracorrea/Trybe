import AppError from "../errors/AppError.js";

function validateCEP(cep) {
  const curatedCEP = cep.replace(/[\-|\.]/g, '');

  const isValidLength = cep.length === 8;

  if (!isValidLength) {
    throw new AppError('Invalid CEP format');
  }

  const onlyNumbersRegex = /^[0-9]*$/g;
  const hasOnlyNumbers = onlyNumbersRegex.test(curatedCEP);

  if (!hasOnlyNumbers) {
    throw new AppError('Invalid CEP format');
  }

  return curatedCEP;
}

export default validateCEP;
