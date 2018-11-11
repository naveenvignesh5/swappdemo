import { combineReducers } from 'redux';

// Reducers
import loader from './loader';
import users from './users';
import albums from './albums';
import images from './images';

const rootReducer = combineReducers({
  loader,
  users,
  albums,
  images,
});

export default rootReducer;
