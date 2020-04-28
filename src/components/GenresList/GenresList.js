import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenresListItem from '../GenresListItem/GenresListItem';

class GenresList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GENRES',
    });
  }

  render() {
    return (
      <div>
        <h3>Available Genres</h3>
        <ul>
          {this.props.store.genres.map((item, index) => (
            <GenresListItem key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(GenresList);
