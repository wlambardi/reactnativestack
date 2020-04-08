import keyMirror from 'keymirror';
import { createAction } from 'redux-actions';
import { getNews } from '../../api';

export const newsActionTypes = keyMirror({
  RETRIEVE_NEWS_REQUEST: null,
  RETRIEVE_NEWS_SUCCESS: null,
  RETRIEVE_NEWS_FAILURE: null,
});

const newsActionCreators = {
  request: createAction(newsActionTypes.RETRIEVE_NEWS_REQUEST),
  success: createAction(newsActionTypes.RETRIEVE_NEWS_SUCCESS),
  failure: createAction(newsActionTypes.RETRIEVE_NEWS_FAILURE),
};

export const retrieveNews = qry => dispatch => {
  dispatch(newsActionCreators.request());
  getNews(qry)
    .then(news => {
      dispatch(newsActionCreators.success(news));
    })
    .catch(error => dispatch(newsActionCreators.failure(error)));
};

