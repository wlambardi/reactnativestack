import { commentsActionTypes } from '../actions/comments';

export const initialState = {
  loadingComments: false,
  comments: [],
  error: null,
};

const actionsMap = {

  [commentsActionTypes.RETRIEVE_COMMENTS_REQUEST]: state => ({
    ...state,
    loadingComments: true,
  }),

  [commentsActionTypes.RETRIEVE_COMMENTS_SUCCESS]: (state, action) => ({
    ...state,
    loadingComments: false,
    comments: action.payload,
  }),

  [commentsActionTypes.RETRIEVE_COMMENTS_FAILURE]: (state, action) => ({
    ...state,
    loadingComments: false,
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
