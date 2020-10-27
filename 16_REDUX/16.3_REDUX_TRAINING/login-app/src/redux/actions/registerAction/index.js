export const REGISTER = 'REGISTER';

export function registerClientAction({ name, age, email }) {
  return {
    type: REGISTER,
    client: {
      name,
      age,
      email,
    },
  };
}
