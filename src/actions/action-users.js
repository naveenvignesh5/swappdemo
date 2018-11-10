import { USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_DATA_ERROR } from '../constants/actionTypes';
import { GET } from '../libs/service';
import { API } from '../config/api';

const userDataRequest = () => ({
  type: USER_DATA_REQUEST,
});

const userDataRequestSuccess = data => ({
  type: USER_DATA_SUCCESS,
  payload: data,
});

const userDataRequestError = error => ({
  type: USER_DATA_ERROR,
  error,
});

export const fetchUserData = () => async (dispatch) => {
  try {
    dispatch(userDataRequest());
    const res = await GET(`${API}/users`);
    dispatch(userDataRequestSuccess(res));
  } catch (err) {
    dispatch(userDataRequestError(err));
  }
};