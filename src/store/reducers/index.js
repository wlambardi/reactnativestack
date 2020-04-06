import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';
import albums from './albums';
import photos from './photos';

const combinedReducers = combineReducers({ posts, comments, albums, photos });
export default combinedReducers;
