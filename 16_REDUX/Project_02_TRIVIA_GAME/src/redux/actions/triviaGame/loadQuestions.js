import { getAccessToken, getTriviaQuestion } from '../../../services/triviaApi';

export const GET_QUESTIONS = 'GET_QUESTIONS';

function loadQuestions({ questions, token }) {
  return {
    type: GET_QUESTIONS,
    payload: {
      questions,
      token,
    },
  };
}

export function fetchQuestions(token, config) {
  return (
    async (dispatch) => {
      let validToken = token;

      if (!validToken) {
        validToken = await getAccessToken();
        localStorage.setItem('token', validToken);
      }

      let questions = await getTriviaQuestion(validToken, config);

      if (!questions.length) {
        validToken = await getAccessToken();
        questions = await getTriviaQuestion(validToken, config);
        localStorage.setItem('token', validToken);
      }

      questions = questions.map((question) => {
        const correctAnswer = {
          answer: question.correct_answer,
          correct: true,
        };

        const incorrectAnswers = question.incorrect_answers.map((incorrect) => ({
          answer: incorrect,
          correct: false,
        }));

        const answers = [...incorrectAnswers, correctAnswer];

        const randomizer = 0.5;
        answers.sort(() => Math.random() - randomizer);

        return { ...question, answers };
      });

      dispatch(loadQuestions({
        questions,
        token: validToken,
      }));
    }
  );
}
