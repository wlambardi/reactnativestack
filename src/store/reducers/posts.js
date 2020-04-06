import { postsActionTypes } from '../actions/posts';

export const initialState = {
  loadingPosts: false,
  posts: [],
  error: null,
};

const actionsMap = {

  [postsActionTypes.RETRIEVE_POSTS_REQUEST]: state => ({
    ...state,
    loadingPosts: true,
  }),

  [postsActionTypes.RETRIEVE_POSTS_SUCCESS]: (state, action) => ({
    ...state,
    loadingPosts: false,
    posts: action.payload,
  }),

  [postsActionTypes.RETRIEVE_POSTS_FAILURE]: (state, action) => ({
    ...state,
    loadingPosts: false,
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
