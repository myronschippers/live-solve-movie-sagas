import React, { Component } from 'react';
import { connect } from 'react-redux';

// custom material-ui styling dependencies
import { withStyles, createStyles } from '@material-ui/core/styles';
// material component imports
import {
  Button,
  Container,
  Grid,
  Typography,
  Chip,
  Paper,
  Box,
} from '@material-ui/core';

import AppHeader from '../../AppHeader/AppHeader';

const customStyles = theme =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
      margin: 0,
      padding: theme.spacing(1),
      listStyle: 'none',
    },
    poster: {
      width: '100%',
    },
  });

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
    const { classes } = this.props;

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
                className={classes.poster}
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

              <Box mb={3}>
                <Typography
                  component="p"
                  variant="body1"
                  gutterBottom={true}
                >
                  {this.props.store.details.description}
                </Typography>
              </Box>

              <Paper
                component="ul"
                variant="outlined"
                className={classes.root}
              >
                {this.props.store.movieGenres.map((item, index) => <li key={index}><Chip label={item.name} variant="outlined" color="primary" /></li>)}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = store => ({ store });

export default withStyles(customStyles)(
  connect(mapStoreToProps)(DetailsPage)
);
