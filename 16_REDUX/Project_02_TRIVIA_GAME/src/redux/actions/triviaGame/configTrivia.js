export const CONFIG = 'CONFIG';

export function updateSettings({ amount, difficulty, type, category }) {
  return {
    type: CONFIG,
    payload: {
      config: {
        amount,
        difficulty,
        type,
        category,
      },
    },
  };
}
