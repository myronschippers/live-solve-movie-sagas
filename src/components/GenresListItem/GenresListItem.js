import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenresListItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <li>
        {item.name} <button>X</button>
      </li>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(GenresListItem);
