export default function validateToken(token) {
  if (!token || token.length !== 12) return false;

  const validChars = 'abcdefghijklmnopqrstuvwyxz0123456789';

  let valid = true;

  token.split('').forEach((char) => {
    const lowerChar = char.toLowerCase();

    if (!validChars.includes(lowerChar)) {
      valid = false;
    }
  });

  return valid;
}
