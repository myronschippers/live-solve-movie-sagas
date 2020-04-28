import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviesList extends Component {
  render() {
    return (
      <div className="algnLeft">
        MOVIES LIST
      </div>
    );
  }
}

const mapStoreToProps = store => ({ store });

export default connect(mapStoreToProps)(MoviesList);
