import keyMirror from 'keymirror';
import { createAction } from 'redux-actions';
import { getComments } from '../../api';

export const commentsActionTypes = keyMirror({
  RETRIEVE_COMMENTS_REQUEST: null,
  RETRIEVE_COMMENTS_SUCCESS: null,
  RETRIEVE_COMMENTS_FAILURE: null,
});

const commentsActionCreators = {
  request: createAction(commentsActionTypes.RETRIEVE_COMMENTS_REQUEST),
  success: createAction(commentsActionTypes.RETRIEVE_COMMENTS_SUCCESS),
  failure: createAction(commentsActionTypes.RETRIEVE_COMMENTS_FAILURE),
};

export const retrieveComments = id => dispatch => {
  dispatch(commentsActionCreators.request());
  getComments(id)
    .then(comments => {
      dispatch(commentsActionCreators.success(comments));
    })
    .catch(error => dispatch(commentsActionCreators.failure(error)));
};