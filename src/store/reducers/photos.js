import { photosActionTypes } from '../actions/photos';

export const initialState = {
  loadingPhotos: false,
  photos: [],
  error: null,
};

const actionsMap = {

  [photosActionTypes.RETRIEVE_PHOTOS_REQUEST]: state => ({
    ...state,
    loadingPhotos: true,
  }),

  [photosActionTypes.RETRIEVE_PHOTOS_SUCCESS]: (state, action) => ({
    ...state,
    loadingPhotos: false,
    photos: action.payload,
  }),

  [photosActionTypes.RETRIEVE_PHOTOS_FAILURE]: (state, action) => ({
    ...state,
    loadingPhotos: false,
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
