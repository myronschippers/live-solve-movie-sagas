import React, { Component } from 'react';

// custom material styling imports
import { withStyles, createStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

const customStyles = theme =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'left',
      margin: `0 0 15px`,
    },
    title: {
      flexGrow: 2,
    },
});

class AppHeader extends Component {
  render() {
    const {
      classes
    } = this.props;

    let backArrowContent = null;

    if (this.props.backHandler != null) {
      backArrowContent = (
        <IconButton onClick={this.props.backHandler}>
          <ArrowBackIos fontSize="large" />
        </IconButton>
      );
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {backArrowContent}
            <Typography
              variant="h4"
              component="h1"
              color="inherit"
              className={classes.title}
            >
              {this.props.title}
            </Typography>
            <div>
              {this.props.children}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(customStyles)(AppHeader);
