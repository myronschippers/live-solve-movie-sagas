import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui custom styling dependencies
import { withStyles, createStyles } from '@material-ui/core/styles';
// material component imports
import {
  Button,
  Container,
  TextField,
  Grid,
  LinearProgress,
  Box,
  Paper,
} from '@material-ui/core';

import MovieGenresEditor from '../../MovieGenresEditor/MovieGenresEditor';
import AppHeader from '../../AppHeader/AppHeader';

const customStyles = theme =>
  createStyles({
    paperBlock: {
      padding: theme.spacing(4),
    },
  });

class EditPage extends Component {
  state = {
    title: '',
    description: '',
  }

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

  changeMovieDetails = (fieldKey) => ((event) => {
    this.setState({
      [fieldKey]: event.target.value
    })
  });

  clickCancel = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`)
  }

  clickSaveMovieDetails = (event) => {
    // dispatch to saga to make API call
    let newDetails = {
      ...this.state,
      id: this.props.match.params.id
    };

    if (newDetails.title == null || newDetails.title === '') {
      newDetails.title = this.props.store.details.title;
    }

    if (newDetails.description == null || newDetails.description === '') {
      newDetails.description = this.props.store.details.description;
    }

    this.props.dispatch({
      type: 'PUT_MOVIE',
      payload: newDetails,
    })
    // navigate to the details page
    this.props.history.push(`/details/${this.props.match.params.id}`);
  }

  render() {
    let movieForm = <LinearProgress />

    if (this.props.match.params.id != null
      && this.props.store.details.title != null
      && this.props.store.details.description != null
    ) {
      movieForm = (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                placeholder="New Title"
                onChange={this.changeMovieDetails('title')}
                value={this.state.title}
                defaultValue={this.props.store.details.title}

                fullWidth
                variant="outlined"
                label="Movie Title"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={this.changeMovieDetails('description')}
                value={this.state.description}
                defaultValue={this.props.store.details.description}

                fullWidth
                variant="outlined"
                label="Movie Description"
                multiline
                required
              />
            </Grid>
          </Grid>
      );
    }

    const {
      classes
    } = this.props;
    return (
      <div className="algnLeft">
        <AppHeader
          title="Edit"
          backHandler={this.clickCancel}
        >
          <Button
            onClick={this.clickSaveMovieDetails}
            variant="contained"
            color="primary"
            size="medium"
          >
            Save
          </Button>
        </AppHeader>

        <Container maxWidth={false}>
          <Box mb={4}>
            <Paper
              className={classes.paperBlock}
              component="div"
              variant="outlined"
            >
              {movieForm}
            </Paper>
          </Box>

          <MovieGenresEditor movieId={this.props.match.params.id} />
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = store => ({ store });

export default withStyles(customStyles)(connect(mapStoreToProps)(EditPage));
