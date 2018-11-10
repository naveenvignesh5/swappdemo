import {
  USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_DATA_ERROR,
  ALBUM_DATA_REQUEST, ALBUM_DATA_SUCCESS, ALBUM_DATA_ERROR,
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
  case USER_DATA_REQUEST:
  case ALBUM_DATA_REQUEST:
    return Object.assign({}, state, { isFetching: true });
  case USER_DATA_SUCCESS:
  case ALBUM_DATA_SUCCESS:
    return Object.assign({}, state, { isFetching: false });
  case USER_DATA_ERROR:
  case ALBUM_DATA_ERROR:
    return Object.assign({}, state, { isFetching: false, isError: false, error: action.error });
  default:
    return state;
  }
};
