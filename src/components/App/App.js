import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// PAGE COMPONENTS
import DetailsPage from '../pages/DetailsPage/DetailsPage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          {/* <Route exact path="/" component={DetailsPage} /> */}
          <Route path="/details" component={DetailsPage} />
          {/* <Route path="/edit" component={DetailsPage} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
