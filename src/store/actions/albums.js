import keyMirror from 'keymirror';
import { createAction } from 'redux-actions';
import { getAlbums } from '../../api';

export const albumsActionTypes = keyMirror({
  RETRIEVE_ALBUMS_REQUEST: null,
  RETRIEVE_ALBUMS_SUCCESS: null,
  RETRIEVE_ALBUMS_FAILURE: null,
});

const albumsActionCreators = {
  request: createAction(albumsActionTypes.RETRIEVE_ALBUMS_REQUEST),
  success: createAction(albumsActionTypes.RETRIEVE_ALBUMS_SUCCESS),
  failure: createAction(albumsActionTypes.RETRIEVE_ALBUMS_FAILURE),
};

export const retrieveAlbums = () => dispatch => {
  dispatch(albumsActionCreators.request());
  getAlbums()
    .then(albums => {
      dispatch(albumsActionCreators.success(albums));
    })
    .catch(error => dispatch(albumsActionCreators.failure(error)));
};

