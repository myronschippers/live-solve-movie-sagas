// Used to store the movie genres
// REDUCER FOR STORING MOVIE GENRES
const genres = (state = [], action) => {
  switch (action.type) {
      case 'SET_GENRES':
          return action.payload;
      default:
          return state;
  }
}

export default genres;
