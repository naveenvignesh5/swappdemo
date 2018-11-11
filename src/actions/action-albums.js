import { ALBUM_DATA_REQUEST, ALBUM_DATA_SUCCESS, ALBUM_DATA_ERROR } from '../constants/actionTypes';
import { GET } from '../libs/service';
import { API } from '../config/api';

const albumDataRequest = () => ({
  type: ALBUM_DATA_REQUEST,
});

const albumDataRequestSuccess = data => ({
  type: ALBUM_DATA_SUCCESS,
  payload: data,
});

const albumDataRequestError = error => ({
  type: ALBUM_DATA_ERROR,
  error,
});

// eslint-disable-next-line
export const fetchAlbumData = userId => async (dispatch) => {
  try {
    dispatch(albumDataRequest());
    const res = await GET(`${API}/albums?userId=${userId}`);
    dispatch(albumDataRequestSuccess(res));
  } catch (err) {
    dispatch(albumDataRequestError(err));
  }
};
