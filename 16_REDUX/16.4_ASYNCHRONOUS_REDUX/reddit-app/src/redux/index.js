import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import api from '../services/redditAPI';

const initialState = {
  loading: false,
  subsInfo: {
    reactjs: {
      posts: [],
    },
    frontend: {
      posts: [],
    },
  },
  error: '',
};

const LOADING = 'LOADING';

function loadAction() {
  return {
    type: LOADING,
  };
}

const ERROR = 'ERROR';

function errorAction() {
  return {
    type: ERROR,
    error: 'Ocorreu um erro durante a requisição',
  };
}

const UPDATE_DATA = 'UPDATE_DATA';

function loadSubAction({ sub, posts }) {
  return {
    type: UPDATE_DATA,
    payload: {
      sub,
      posts,
    },
  };
}

export function fetchSubData(sub) {
  return async (dispatch) => {
    dispatch(loadAction());

    try {
      const {
        data: {
          data: { children },
        },
      } = await api.get(`/${sub}.json`);

      const posts = children.map(({ data }) => {
        return data;
      });

      dispatch(
        loadSubAction({
          sub,
          posts,
        }),
      );
    } catch {
      dispatch(errorAction());
    }
  };
}

function baseReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATA:
      const { subsInfo } = state;
      const newSubsInfo = { ...subsInfo };

      newSubsInfo[action.payload.sub].posts = action.payload.posts;
      newSubsInfo[action.payload.sub].updatedAt = new Date(
        Date.now(),
      ).toString();

      return { loading: false, error: '', subsInfo: newSubsInfo };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}

const store = createStore(baseReducer, applyMiddleware(thunk));

export default store;
