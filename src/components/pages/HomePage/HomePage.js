import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

        <Link to="/admin">Admin Page</Link>

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
