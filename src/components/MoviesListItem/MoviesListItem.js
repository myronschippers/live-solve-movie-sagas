import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MoviesListItem extends Component {
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
    const { item } = this.props;

    return (
      <div
        className="movieListItem"
        onClick={(event) => this.clickMovieDetails(event, item.id)}
      >
        <img src={item.poster} alt={item.title} />
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ul>
            {item.genre.filter((genreItemFilter) => (genreItemFilter !== null))
              .map((genreItem, genreIndex) => (
              <li key={genreIndex}>{genreItem}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = store => ({ store });

export default withRouter(connect(mapStoreToProps)(MoviesListItem));
