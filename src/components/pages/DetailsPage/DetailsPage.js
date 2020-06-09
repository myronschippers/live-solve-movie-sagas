import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from "classnames";

// custom material-ui styling dependencies
import { withStyles, createStyles } from '@material-ui/core/styles';
// material component imports
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';

import AppHeader from '../../AppHeader/AppHeader';
import MovieGenresEditor from '../../MovieGenresEditor/MovieGenresEditor';

// material-kit
import GridContainer from '../../../material-kit/components/Grid/GridContainer.js';
import GridItem from '../../../material-kit/components/Grid/GridItem.js';
import Parallax from '../../../material-kit/components/Parallax/Parallax.js';
// material-kit styling
import basicStyles from "../../../material-kit/assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import styles from '../../../material-kit/assets/jss/material-kit-react/views/components.js';

import heroImage from '../../../assets/images/filming.jpg';


const customStyles = theme =>
  createStyles({
    poster: {
      width: '100%',
    },
    ...basicStyles,
    ...styles,
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
          title="Movie Saga"
          backHandler={this.clickBackToList}
          btnCallback={this.clickEditMovie}
          btnText="Edit"
          btnIcon={<Edit />}
        >
          {/* <CustomButton
            onClick={this.clickEditMovie}
            color="transparent"
            className={classes.navLink}
          >
            Edit
          </CustomButton> */}
        </AppHeader>

        <Parallax image={heroImage}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Movie Details on...</h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.sections}>
            <div className={classes.container}>
              <Container maxWidth={false}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4} md={3}>
                    <img
                      className={classes.poster}
                      src={this.props.store.details.poster}
                      alt={`${this.props.store.details.title}, movie poster`}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Typography
                      component="h3"
                      variant="h4"
                      gutterBottom={true}
                      color="textPrimary"
                    >
                      {this.props.store.details.title}
                    </Typography>

                    <Box mb={3}>
                      <Typography
                        component="p"
                        variant="body1"
                        gutterBottom={true}
                        color="textPrimary"
                      >
                        {this.props.store.details.description}
                      </Typography>
                    </Box>

                    <MovieGenresEditor movieId={this.props.match.params.id} />
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = store => ({ store });

export default withStyles(customStyles)(
  connect(mapStoreToProps)(DetailsPage)
);
