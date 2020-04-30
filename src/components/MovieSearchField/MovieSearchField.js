import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieSearchField extends Component {
  changeSearch = (event) => {
    this.props.dispatch({
      type: 'SET_SEARCH',
      payload: event.target.value
    });
  }

  render() {
    return (
      <input
        placeholder="Search"
        type="text"
        onChange={this.changeSearch}
      />
    );
  }
}

export default connect()(MovieSearchField);
