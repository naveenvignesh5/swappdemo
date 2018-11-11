import { IMAGES_DATA_REQUEST, IMAGES_DATA_SUCCESS, IMAGES_DATA_ERROR } from '../constants/actionTypes';
import { GET } from '../libs/service';
import { API } from '../config/api';

const imageDataRequest = () => ({
  type: IMAGES_DATA_REQUEST,
});

const imageDataRequestSuccess = data => ({
  type: IMAGES_DATA_SUCCESS,
  payload: data,
});

const imageDataRequestError = error => ({
  type: IMAGES_DATA_ERROR,
  error,
});

// eslint-disable-next-line
export const fetchImageData = albumId => async (dispatch) => {
  try {
    dispatch(imageDataRequest());
    const res = await GET(`${API}/photos?albumId=${albumId}`);
    dispatch(imageDataRequestSuccess(res));
  } catch (err) {
    dispatch(imageDataRequestError(err));
  }
};
