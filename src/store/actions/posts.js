import keyMirror from 'keymirror';
import { createAction } from 'redux-actions';
import { getPosts } from '../../api';

export const postsActionTypes = keyMirror({
  RETRIEVE_POSTS_REQUEST: null,
  RETRIEVE_POSTS_SUCCESS: null,
  RETRIEVE_POSTS_FAILURE: null,
});

const postsActionCreators = {
  request: createAction(postsActionTypes.RETRIEVE_POSTS_REQUEST),
  success: createAction(postsActionTypes.RETRIEVE_POSTS_SUCCESS),
  failure: createAction(postsActionTypes.RETRIEVE_POSTS_FAILURE),
};

export const retrievePosts = () => dispatch => {
  dispatch(postsActionCreators.request());
  getPosts()
    .then(posts => {
      dispatch(postsActionCreators.success(posts));
    })
    .catch(error => dispatch(postsActionCreators.failure(error)));
};

