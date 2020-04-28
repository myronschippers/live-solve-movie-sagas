import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddGenre from '../../AddGenre/AddGenre';

class AdminPage extends Component {
  render() {
    return (
      <div>
        <h2>Admin</h2>
        <Link to="/">Home Page</Link>

        <AddGenre />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminPage);
