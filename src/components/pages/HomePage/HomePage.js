import React, { Component } from 'react';
import { connect } from 'react-redux';

// app components
import MoviesList from '../../MoviesList/MoviesList';
import AppHeader from '../../AppHeader/AppHeader';
import MovieSearchField from '../../MovieSearchField/MovieSearchField';

class HomePage extends Component {
  render() {
    return (
      <div>
        <AppHeader title="Movies">
          <MovieSearchField />
        </AppHeader>

        <MoviesList />
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  }
};

export default connect(mapStoreToProps)(HomePage);
