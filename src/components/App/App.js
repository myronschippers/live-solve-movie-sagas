import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// material-ui theme dependencies
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';
import pink from '@material-ui/core/colors/pink';

// PAGE COMPONENTS
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import HomePage from '../pages/HomePage/HomePage';
import EditPage from '../pages/EditPage/EditPage';
import AdminPage from '../pages/AdminPage/AdminPage';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: indigo,
    secondary: amber,
    error: pink,
    // warning: '',
    // info: '',
    // success: '',
    background: {
      paper: '#222428',
    },
    text: {
      primary: '#efefef',
      secondary: '',
      disabled: '',
    },
    divider: '#000000',
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
