import React, { Component } from 'react';
import './App.css';
import BookListView from './views/BookListView.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
//  Redirect
} from 'react-router-dom'

import BookView from "./views/BookView.js";

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <div className="App-header">
            <div className="logodiv">
              <Link to="/">
              <img src="/images/nblogoani.gif" className="App-logo" alt="logo" />
              </Link>
            </div>

            <div className="welcomediv">
              <h2>Welcome to Noisebridge Library</h2>
            </div>

          </div>
          <Switch>
            <Route path="/" exact component={BookListView}/>
            <Route path="/book/:book" component={BookView}/>
          </Switch>
          <p className="App-intro">
            To help make the digital interface to the Noisebridge Library see:
            <a href="https://github.com/nb-library-wg/nb-library-react">
            The github repo</a> for the front end of this project.
          </p>
        </div>
    </Router>

    );
  }
}

export default App;
