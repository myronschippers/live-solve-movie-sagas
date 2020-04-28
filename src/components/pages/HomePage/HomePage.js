import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesList from '../../MoviesList/MoviesList';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
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
