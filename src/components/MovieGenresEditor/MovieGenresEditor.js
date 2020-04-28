import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieGenreItem from '../MovieGenreItem/MovieGenreItem';

class MovieGenresEditor extends Component {
  render() {
    return (
      <div>
        <h4>Movie Genre(s)</h4>
        <ul>
          {this.props.store.genres.map((item, index) => <MovieGenreItem key={index} item={item} />)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => ({ store });
export default connect(mapStateToProps)(MovieGenresEditor);
