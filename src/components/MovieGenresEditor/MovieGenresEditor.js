import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieGenreItem from '../MovieGenreItem/MovieGenreItem';

// material-ui custom styling dependencies
import { withStyles, createStyles } from '@material-ui/core/styles';
// material-ui components
import {
  Paper,
  IconButton,
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

const customStyles = theme =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
      margin: 0,
      padding: theme.spacing(1),
      listStyle: 'none',
    },
  });

class MovieGenresEditor extends Component {
  state = {
    selectedGenreId: 0,
  }

  componentDidMount() {
    // API call to load available genres
    // dispatching saga
    this.props.dispatch({
      type: 'GET_GENRES'
    });
  }

  changeSelectedGenre = (event) => {
    this.setState({
      selectedGenreId: event.target.value
    });
  }

  clickAddGenre = (event) => {
    if (this.state.selectedGenreId === ''
      || this.state.selectedGenreId === 0
    ) {
      alert('You must select a genre to add it.');
      return;
    }

    this.props.dispatch({
      type: 'POST_MOVIE_GENRE',
      payload: {
        movies_id: this.props.movieId,
        genres_id: this.state.selectedGenreId,
      }
    })
  }

  render() {
    const {
      classes
    } = this.props;

    return (
      <div>
        <h4>Movie Genre(s)</h4>
        <div>
          <select onChange={this.changeSelectedGenre}>
            <option value="">Select a Genre</option>
            {this.props.store.genres.map((item, index) => (
              <option key={index} value={item.id}>{item.name}</option>
            ))}
          </select>
          <button onClick={this.clickAddGenre}>Add Genre</button>
        </div>

        <Paper
          component="ul"
          variant="outlined"
          className={classes.root}
        >
          {this.props.store.movieGenres.map((item, index) => (
            <MovieGenreItem key={index} item={item} />
          ))}
          <li>
            <IconButton onClick={this.clickAddGenre}>
              <AddCircle />
            </IconButton>
          </li>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = store => ({ store });
export default withStyles(customStyles)(
  connect(mapStateToProps)(MovieGenresEditor)
);
