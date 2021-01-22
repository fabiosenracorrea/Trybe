export default function validateLogin({ email, password }) {
  const emailRegex = /\w+@(\w+\.)+\w+$/i;
  const emailIsValid = emailRegex.test(email);
  const passwordIsValid = (password.length > 3 && password.length < 9);

  return emailIsValid && passwordIsValid;
}
