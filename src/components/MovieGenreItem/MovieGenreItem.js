import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui components
import { Chip } from '@material-ui/core';

class MovieGenreItem extends Component {
  clickDeleteGenre = (event) => {
    // dispatch to a saga for deleting genre from database
    this.props.dispatch({
      type: 'DELETE_MOVIE_GENRE',
      payload: {
        movieGenreId: this.props.item.id,
        movieId: this.props.item.movies_id,
      }
    });
  }

  render() {
    const { item } = this.props;
    return (
      <li>
        <Chip
          label={item.name}
          variant="outlined"
          color="primary"
          onDelete={this.clickDeleteGenre}
        />
      </li>
    );
  }
}

const mapStateToProps = store => ({ store });
export default connect(mapStateToProps)(MovieGenreItem);
