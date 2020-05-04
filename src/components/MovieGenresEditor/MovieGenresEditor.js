import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieGenreItem from '../MovieGenreItem/MovieGenreItem';

// material-ui custom styling dependencies
import { withStyles, createStyles } from '@material-ui/core/styles';
// material-ui components
import {
  Paper,
  IconButton,
  Modal,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

const customStyles = theme =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    pillList: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0, 0.5, 0.5, 0),
      },
      margin: 0,
      padding: theme.spacing(0, 0, 1, 0),
      listStyle: 'none',
    },
    modalContent: {
      width: '350px',
      height: '200px',
      top: `50%`,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'fixed',
      padding: theme.spacing(2, 3, 3),
    },
    formControl: {
      minWidth: 120,
    },
  });

class MovieGenresEditor extends Component {
  state = {
    selectedGenreId: 0,
    isAddGenreModalOpen: false,
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
    });

    this.closeAddGenreModal();
  }

  // updating local state to close modal
  closeAddGenreModal = () => {
    this.setState({
      isAddGenreModalOpen: false,
    })
  }

  // updating local state to open modal
  openAddGenreModal = () => {
    this.setState({
      isAddGenreModalOpen: true,
    })
  }

  render() {
    const {
      classes
    } = this.props;

    return (
      <div>
        {/* <h4>Movie Genre(s)</h4> */}
        {/* <div>
          <select onChange={this.changeSelectedGenre}>
            <option value="">Select a Genre</option>
            {this.props.store.genres.map((item, index) => (
              <option key={index} value={item.id}>{item.name}</option>
            ))}
          </select>
          <button onClick={this.clickAddGenre}>Add Genre</button>
        </div> */}

        <Paper
          component="div"
          variant="outlined"
          className={classes.root}
        >
          <Typography
            variant="subtitle1"
            component="h4"
          >
            Genres:
          </Typography>

          <ul className={classes.pillList}>
            {this.props.store.movieGenres.map((item, index) => (
              <MovieGenreItem key={index} item={item} />
            ))}
            <li>
              <IconButton onClick={this.openAddGenreModal}>
                <AddCircle />
              </IconButton>
            </li>
          </ul>
        </Paper>

        <Modal
          open={this.state.isAddGenreModalOpen}
          onClose={this.closeAddGenreModal}
        >
          <Paper className={classes.modalContent}>
            <Typography
              component="h3"
              variant="h6"
              gutterBottom
            >
              Pick a New Genre to Add
            </Typography>

            <Box mb={3}>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel id="genresSelection">Genres:</InputLabel>
                <Select
                  labelId="genresSelection"
                  id="genresSelection"
                  onChange={this.changeSelectedGenre}
                  label="Genres:"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {this.props.store.genres.map((item, index) => (
                    <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* <select onChange={this.changeSelectedGenre}>
              <option value="">Select a Genre</option>
              {this.props.store.genres.map((item, index) => (
                <option key={index} value={item.id}>{item.name}</option>
              ))}
            </select> */}
            <Button
              onClick={this.clickAddGenre}
              variant="contained"
              color="primary"
              fullWidth
            >
              Save
            </Button>
          </Paper>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = store => ({ store });
export default withStyles(customStyles)(
  connect(mapStateToProps)(MovieGenresEditor)
);
