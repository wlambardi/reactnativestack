import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';
import albums from './albums';
import photos from './photos';
import news from './news';

const combinedReducers = combineReducers({ posts, comments, albums, photos, news });
export default combinedReducers;
