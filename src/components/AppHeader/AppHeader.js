import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// custom material styling imports
import { withStyles, createStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import Link from '@material-ui/core/Link';

const customStyles = theme =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'left',
      margin: `0 0 30px`,
    },
    title: {
      flexGrow: 2,
    },
    primaryHdg: {
      display: 'inline-block',
      marginRight: '0.8rem',
    }
});

class AppHeader extends Component {
  render() {
    const {
      classes
    } = this.props;

    let backArrowContent = null;

    if (this.props.backHandler != null) {
      backArrowContent = (
        <IconButton color="secondary" onClick={this.props.backHandler}>
          <ArrowBackIos fontSize="large" />
        </IconButton>
      );
    }

    return (
      <div className={classes.root}>
        <AppBar
          color="default"
          position="static"
        >
          <Toolbar>
            {backArrowContent}
            <div className={classes.title}>
              <Typography
                variant="h4"
                component="h1"
                color="secondary"
                className={classes.primaryHdg}
              >
                {this.props.title}
              </Typography>
              <Link
                underline="none"
                color="inherit"
                href="#/admin"
              >
                <Tooltip title="Admin">
                  <SettingsApplications />
                </Tooltip>
              </Link>
            </div>
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
