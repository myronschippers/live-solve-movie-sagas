import React, { Component } from 'react';
import { connect } from 'react-redux';

// custom material styling imports
import { withStyles, createStyles } from '@material-ui/core/styles';

// app components
import MoviesList from '../../MoviesList/MoviesList';
import AppHeader from '../../AppHeader/AppHeader';
import MovieSearchField from '../../MovieSearchField/MovieSearchField';

// material-kit
import GridContainer from '../../../material-kit/components/Grid/GridContainer.js';
import GridItem from '../../../material-kit/components/Grid/GridItem.js';
import Parallax from '../../../material-kit/components/Parallax/Parallax.js';

import styles from '../../../material-kit/assets/jss/material-kit-react/views/components.js';
// import heroImage from '../../../material-kit/assets/img/bg4.jpg';
import heroImage from '../../../assets/images/theater-seats.jpg';

const customStyles = theme =>
  createStyles(
    {
      ...styles,
    }
  );

class HomePage extends Component {
  render() {
    const {
      classes
    } = this.props;

    return (
      <div>
        <Parallax image={heroImage}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Epic Movies List</h1>
                  <h3 className={classes.subtitle}>
                    A Badass Movie List based on personal opinion.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <AppHeader title="Movies">
          <MovieSearchField />
        </AppHeader>

        <MoviesList />
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  }
};

export default connect(mapStoreToProps)(withStyles(customStyles)(HomePage));
