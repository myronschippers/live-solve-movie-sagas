// Used to store the movie genres
// REDUCER FOR STORING MOVIE GENRES
const movieGenres = (state = [], action) => {
  switch (action.type) {
      case 'SET_MOVIE_GENRES':
          return action.payload;
      default:
          return state;
  }
}

export default movieGenres;
