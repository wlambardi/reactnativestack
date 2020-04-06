import keyMirror from 'keymirror';
import { createAction } from 'redux-actions';
import { getPhotos } from '../../api';

export const photosActionTypes = keyMirror({
  RETRIEVE_PHOTOS_REQUEST: null,
  RETRIEVE_PHOTOS_SUCCESS: null,
  RETRIEVE_PHOTOS_FAILURE: null,
});

const photosActionCreators = {
  request: createAction(photosActionTypes.RETRIEVE_PHOTOS_REQUEST),
  success: createAction(photosActionTypes.RETRIEVE_PHOTOS_SUCCESS),
  failure: createAction(photosActionTypes.RETRIEVE_PHOTOS_FAILURE),
};

export const retrievePhotos = id => dispatch => {
  dispatch(photosActionCreators.request());
  getPhotos(id)
    .then(photos => {
      dispatch(photosActionCreators.success(photos));
    })
    .catch(error => dispatch(photosActionCreators.failure(error)));
};
