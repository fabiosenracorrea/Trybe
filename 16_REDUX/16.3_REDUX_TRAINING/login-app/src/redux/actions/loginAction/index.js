export const LOGIN = 'LOGIN';

export function loginAction(email) {
  return {
    type: LOGIN,
    email,
  };
}
