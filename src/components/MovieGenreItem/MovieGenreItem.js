import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGenreItem extends Component {
  clickDeleteGenre = (event) => {
    // dispatch to a saga for deleting genre from database
    console.log('CLICKED DELETE');
  }

  render() {
    const { item } = this.props;
    return (
      <li>
        {item.name} <button onClick={this.clickDeleteGenre}>Delete</button>
      </li>
    );
  }
}

const mapStateToProps = store => ({ store });
export default connect(mapStateToProps)(MovieGenreItem);
