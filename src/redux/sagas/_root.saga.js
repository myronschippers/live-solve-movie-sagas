import { takeLatest } from 'redux-saga/effects';

// INDIVIDUAL SAGA FILES
import getAllMovies from './getAllMovies.saga';
import getMovie from './getMovie.saga';
import getMovieGenres from './getMovieGenres.saga';
import putMovieDetails from './putMovieDetails.saga';

// REGISTRATION FOR ALL SAGAS
// Create the rootSaga generator function
function* rootSaga() {
  // REGISTER SAGAS HERE
  yield takeLatest('GET_ALL_MOVIES', getAllMovies);
  yield takeLatest('GET_MOVIE', getMovie);
  yield takeLatest('GET_MOVIE_GENRES', getMovieGenres);
  yield takeLatest('PUT_MOVIE', putMovieDetails);
}

export default rootSaga;
