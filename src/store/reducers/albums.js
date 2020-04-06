import {albumsActionTypes} from '../actions/albums';

export const initialState = {
  loadingAlbums: false,
  albums: [],
  error: null,
};

const actionsMap = {
  [albumsActionTypes.RETRIEVE_ALBUMS_REQUEST]: state => ({
    ...state,
    loadingAlbums: true,
  }),

  [albumsActionTypes.RETRIEVE_ALBUMS_SUCCESS]: (state, action) => ({
    ...state,
    loadingAlbums: false,
    albums: action.payload,
  }),

  [albumsActionTypes.RETRIEVE_ALBUMS_FAILURE]: (state, action) => ({
    ...state,
    loadingAlbums: false,
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
