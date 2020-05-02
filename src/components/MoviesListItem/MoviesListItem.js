import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// dependencies for custom material-ui styling
import { withStyles, createStyles } from '@material-ui/core/styles';
// material-ui components
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from '@material-ui/core';

// create custom material styling
const customStyles = theme =>
  createStyles({
    imgMedia: {
      height: '335px',
      backgroundSizing: 'cover',
    }
  });

class MoviesListItem extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: 'GET_ALL_MOVIES',
    })
  }

  clickMovieDetails = (event, id) => {
    this.props.history.push(`/details/${id}`);
  }

  render() {
    const {
      item,
      classes,
    } = this.props;

    return (
      <Card>
        <CardActionArea
          onClick={(event) => this.clickMovieDetails(event, item.id)}
        >
          <CardMedia
            className={classes.imgMedia}
            image={item.poster}
            title={item.title}
          />
          <CardContent>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul>
              {item.genre.filter((genreItemFilter) => (genreItemFilter !== null))
                .map((genreItem, genreIndex) => (
                <li key={genreIndex}>{genreItem}</li>
              ))}
            </ul>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

const mapStoreToProps = store => ({ store });

export default withStyles(customStyles)(
  withRouter(
    connect(mapStoreToProps)(MoviesListItem)
  )
);
