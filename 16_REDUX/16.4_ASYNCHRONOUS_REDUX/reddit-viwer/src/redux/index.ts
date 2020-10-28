import { createStore, Dispatch, applyMiddleware } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import api, { RedditResponse } from '../services/redditAPI';

interface Action {
  type: string;
  payload?: SubAction;
  error?: string;
}

interface Post {
  title: string;
  url: string;
  ups: number;
}

export interface SubInfo {
  updatedAt?: Date;
  posts: Array<Post>;
}

export interface AppState {
  loading: boolean;
  subsInfo: {
    reactjs: SubInfo;
    frontend: SubInfo;
  };
  error: string;
}

interface SubAction {
  sub: string;
  posts: Post[];
}

const initialState = {
  loading: false,
  subsInfo: {
    reactjs: {
      posts: [] as Post[],
    },
    frontend: {
      posts: [] as Post[],
    },
  },
  error: '',
};

const LOADING = 'LOADING';

function loadAction(): Action {
  return {
    type: LOADING,
  };
}

const ERROR = 'ERROR';

function errorAction(): Action {
  return {
    type: ERROR,
    error: 'Ocorreu um erro durante a requisição',
  };
}

const UPDATE_DATA = 'UPDATE_DATA';

function loadSubAction({ sub, posts }: SubAction): Action {
  return {
    type: UPDATE_DATA,
    payload: {
      sub,
      posts,
    },
  };
}

export function fetchSubData(
  sub: string,
): ThunkAction<void, AppState, unknown, Action> {
  return async (dispatch: Dispatch) => {
    dispatch(loadAction());

    try {
      const {
        data: {
          data: { children },
        },
      } = await api.get<RedditResponse>(`/${sub}.json`);

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

function baseReducer(state = initialState, action: Action): AppState {
  switch (action.type) {
    case UPDATE_DATA:
      if (action.payload) {
        const { subsInfo } = state;
        const newSubsInfo = { ...subsInfo };

        (newSubsInfo as any)[action.payload.sub].posts = action.payload.posts;
        (newSubsInfo as any)[action.payload.sub].updatedAt = new Date(
          Date.now(),
        );
        return { loading: false, error: '', subsInfo: newSubsInfo };
      }
      return { ...state };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: String(action.error), loading: false };
    default:
      return state;
  }
}

const store = createStore(baseReducer, applyMiddleware(thunk));

export default store;
