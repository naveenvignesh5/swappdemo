import { USER_DATA_SUCCESS } from '../constants/actionTypes';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
  case USER_DATA_SUCCESS:
    return Object.assign({}, state, { data: action.payload });
  default:
    return state;
  }
};
