import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGenreItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li>
        {item.name}
      </li>
    );
  }
}

const mapStateToProps = store => ({ store });
export default connect(mapStateToProps)(MovieGenreItem);
