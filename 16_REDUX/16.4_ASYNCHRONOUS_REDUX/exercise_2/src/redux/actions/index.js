import charAPI from '../../services/charAPI';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const CHAR_INFO = 'INFO_RECEIVED';

function loadingAction() {
  return {
    type: LOADING,
  }
}

function errorAction(err) {
  return {
    type: ERROR,
    payload: err,
  }
}

function loadInfoAction(info) {
  return {
    type: CHAR_INFO,
    payload: info,
  }
}

export function apiCallAction(char) {
  return (
    async (dispatch) => {
      dispatch(loadingAction());

      try {
        const [returnedChar, ...rest] = await charAPI(char);

        if (!returnedChar) {
          throw new Error('Character not found. Try again.')
        }

        dispatch(loadInfoAction(returnedChar));
      } catch (err) {
        dispatch(errorAction(err.message))
      }
    }
  );
}

