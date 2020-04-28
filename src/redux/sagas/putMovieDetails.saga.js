import axios from 'axios';
import { put } from 'redux-saga/effects';

function* putMovieDetails(action) {
  try {
      const movieId = action.payload.id;
      yield axios.put(`/api/movies/edit/${movieId}`, action.payload);
      yield put({
          type: 'GET_MOVIE',
          payload: movieId,
      });
      yield put({
          type: 'GET_MOVIE_GENRES',
          payload: movieId,
      });
  } catch(err) {
      console.warn(err);
  }
}

export default putMovieDetails;