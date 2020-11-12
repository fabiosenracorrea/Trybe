import { LOGIN, loginActionCreator } from './user/login';
import { SCORED, updateScore } from './user/score';
import { GET_QUESTIONS, fetchQuestions } from './triviaGame/loadQuestions';
import { CONFIG, updateSettings } from './triviaGame/configTrivia';

export {
  LOGIN,
  loginActionCreator,

  SCORED,
  updateScore,

  GET_QUESTIONS,
  fetchQuestions,

  CONFIG,
  updateSettings,
};
