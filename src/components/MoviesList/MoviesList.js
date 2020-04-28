import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoviesListItem from '../MoviesListItem/MoviesListItem';

class MoviesList extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: 'GET_ALL_MOVIES',
    })
  }

  clickMovieDetails = (event, id) => {
    this.props.history.push(`/details/${id}`);
  }

  render() {
    const limitedResults = this.props.store.movies.filter((item, index) => {
      return index < 10;
    });

    return (
      <div className="algnLeft">
        {limitedResults.map((item, index) => (
          <MoviesListItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

const mapStoreToProps = store => ({ store });

export default withRouter(connect(mapStoreToProps)(MoviesList));
