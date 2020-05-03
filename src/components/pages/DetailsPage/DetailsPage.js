import React, { Component } from 'react';
import { connect } from 'react-redux';

// material component imports
import {
  Button,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

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
          title="Details"
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

        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} sm={3}>
              <img
                src={this.props.store.details.poster}
                alt={`${this.props.store.details.title}, movie poster`}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <Typography
                component="h2"
                variant="h4"
                gutterBottom={true}
              >
                {this.props.store.details.title}
              </Typography>

              <Typography
                component="p"
                variant="body1"
                gutterBottom={true}
              >
                {this.props.store.details.description}
              </Typography>

              <ul>
                {this.props.store.movieGenres.map((item, index) => <li key={index}>{item.name}</li>)}
              </ul>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = store => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
