import { combineReducers } from 'redux';

// imports for individual reducers
import movies from './movies.reducer';
import genres from './genres.reducer';
import details from './details.reducer'

export default combineReducers({
  // REDUCERS ARE REGISTERED
  movies,
  genres,
  details,
});