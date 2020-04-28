import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getAllMovies(action) {
  try {
      const response = yield axios.get('/api/movies');
      yield put({
          type: 'SET_MOVIES',
          payload: response.data,
      }); // put() is the same as this.props.dispatch()
  } catch(err) {
      console.warn(err);
  }
}

export default getAllMovies;
