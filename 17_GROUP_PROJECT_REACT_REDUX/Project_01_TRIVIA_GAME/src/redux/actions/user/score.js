export const SCORED = 'SCORED';

function parseDifficulty(difficulty) {
  const EASY = 'easy';
  const MEDIUM = 'medium';
  const HARD = 'hard';
  const hardGrade = 3;

  switch (difficulty) {
  case EASY:
    return 1;
  case MEDIUM:
    return 2;
  case HARD:
    return hardGrade;
  default:
    return 0;
  }
}

export function updateScore({ difficulty, timer }) {
  const baseScore = 10;
  const addScore = baseScore + (timer * parseDifficulty(difficulty));

  const oldUserInfo = JSON.parse(localStorage.getItem('state'));
  const { assertions, score: oldScore } = oldUserInfo.player;

  const newUserInfo = {
    player: {
      ...oldUserInfo.player,
      score: oldScore + addScore,
      assertions: assertions + 1,
    },
  };

  localStorage.setItem('state', JSON.stringify(newUserInfo));

  return {
    type: SCORED,
    payload: {
      addScore,
    },
  };
}
