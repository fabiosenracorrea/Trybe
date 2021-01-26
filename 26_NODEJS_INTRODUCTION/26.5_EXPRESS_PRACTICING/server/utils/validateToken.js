export default function validateToken(token) {
  if (!token || token.length !== 12) return false;

  const validCharsRegex = /^[\w|\d]*$/gi;

  return validCharsRegex.test(token);
}

