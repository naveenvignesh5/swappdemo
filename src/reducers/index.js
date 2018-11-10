import { combineReducers } from 'redux';

// Reducers
import loader from './loader';
import users from './users';
import albums from './albums';

const rootReducer = combineReducers({
  loader,
  users,
  albums,
});

export default rootReducer;
