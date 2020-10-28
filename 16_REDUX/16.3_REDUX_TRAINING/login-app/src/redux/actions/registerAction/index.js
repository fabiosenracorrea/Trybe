export const REGISTER = 'REGISTER';
export const UNREGISTER = 'UNREGISTER';

export function registerClientAction({ name, age, email }, remove = false) {
  if (!remove) {
    return {
      type: REGISTER,
      client: {
        name,
        age,
        email,
      },
    };
  }

  return {
    type: UNREGISTER,
    client: {
      email,
    },
  };
}
