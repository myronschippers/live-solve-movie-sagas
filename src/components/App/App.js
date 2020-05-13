import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// material-ui theme dependencies
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';
import pink from '@material-ui/core/colors/pink';
import lightGreen from '@material-ui/core/colors/lightGreen';

// PAGE COMPONENTS
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import HomePage from '../pages/HomePage/HomePage';
import EditPage from '../pages/EditPage/EditPage';
import AdminPage from '../pages/AdminPage/AdminPage';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // light: '',
      main: '#1947ce',
      // dark: '',
      // contrastText: '#ea80fc',
    },
    secondary: amber,
    error: pink,
    // warning: '',
    // info: '',
    success: lightGreen,
    contrastThreshold: 2,
    // tonalOffset: 0.05,
    // more custom palette settings
    background: {
      paper: '#1a1c1f',
    },
    text: {
      primary: '#efefef',
      secondary: '',
      disabled: '',
    },
    divider: '#000000',
  },
  overrides: {
    // Stylesheet Name for tour MUI component
    MuiPaper: {
      // select the "rule name" for adjustments
      rounded: {
        // Add CSS Property Rules
        borderRadius: '20px',
      }
    }
  }
});

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Router>
            <Route exact path="/" component={HomePage} />
            <Route path="/details/:id" component={DetailsPage} />
            <Route path="/edit/:id" component={EditPage} />
            <Route path="/admin" component={AdminPage} />
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
