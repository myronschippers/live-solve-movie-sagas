import React, { Component } from 'react';
import { connect } from 'react-redux';

// material component imports
import Button from '@material-ui/core/Button';

import AppHeader from '../../AppHeader/AppHeader';

class DetailsPage extends Component {
  componentDidMount() {
    // dispatch to saga to call server API
    this.props.dispatch({
      type: 'GET_MOVIE',
      payload: this.props.match.params.id
    });
    this.props.dispatch({
      type: 'GET_MOVIE_GENRES',
      payload: this.props.match.params.id
    });
  }

  clickBackToList = (event) => {
    this.props.history.push('/');
  }

  clickEditMovie = (event) => {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  }

  render() {
    return (
      <div className="algnLeft">
        <AppHeader
          title={this.props.store.details.title}
          backHandler={this.clickBackToList}
        >
          <Button
            onClick={this.clickEditMovie}
            variant="outlined"
            color="inherit"
            size="large"
          >
            Edit
          </Button>
        </AppHeader>

        <p>{this.props.store.details.description}</p>

        <ul>
          {this.props.store.movieGenres.map((item, index) => <li key={index}>{item.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = store => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
