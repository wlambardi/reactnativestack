import { newsActionTypes } from '../actions/news';

export const initialState = {
  loadingNews: false,
  news: [],
  error: null,
};

const actionsMap = {

  [newsActionTypes.RETRIEVE_NEWS_REQUEST]: state => ({
    ...state,
    loadingNews: true,
  }),

  [newsActionTypes.RETRIEVE_NEWS_SUCCESS]: (state, action) => ({
    ...state,
    loadingNews: false,
    news: action.payload,
  }),

  [newsActionTypes.RETRIEVE_NEWS_FAILURE]: (state, action) => ({
    ...state,
    loadingNews: false,
    error: action.payload,
  }),
};

export default (state = initialState, action) => {
  const actionHandler = actionsMap[action.type];
  if (!actionHandler) {
    return state;
  }
  return actionHandler(state, action);
};
