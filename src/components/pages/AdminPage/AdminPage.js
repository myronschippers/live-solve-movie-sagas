import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddGenre from '../../AddGenre/AddGenre';
import GenresList from '../../GenresList/GenresList';

class AdminPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USER'
    });
  }

  render() {
    let secureContent = (
      <div>
        <AddGenre />
        <GenresList />
      </div>
    );

    if (this.props.store.user.id == null) {
      secureContent = 'NOT LOGGED IN';
    }

    return (
      <div>
        <h2>Admin</h2>
        <Link to="/">Home Page</Link>

        {secureContent}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminPage);
