import React, { Component } from 'react';
import './App.css';
import BookListView from './views/BookListView.js';
import BookView from "./views/BookView.js";
import AddBookForm from './views/AddBookForm';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
//  Redirect
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div className="logodiv">
              <Link to="/">
              <img src="/images/nblogoani.gif" className="App-logo" alt="logo" />
              </Link>
            </div>
            <div className="welcomediv">
              <h1>Welcome to Noisebridge Library</h1>
            </div>
            <div className="searchHeader">
              <SearchBox />
            </div>
          </header>

          <main>
            <Switch>
              <Route path="/" exact component={BookListView}/>
              <Route path="/book/:book" component={BookView}/>
              <Route path="/new" component={AddBookForm}/>
            </Switch>
          </main>

          <footer>
            <p className="App-intro">
              To help make the digital interface to the Noisebridge Library, see <a href="https://github.com/nb-library-wg/nb-library-react">the Github repo</a> for the front-end of this project.
            </p>
          </footer>
        </div>
      </Router>
    );
  }
}

// Currently has no functionality except as a visual placeholder for when we
// implement some searching.
class SearchBox extends Component {
  render() {
    return (
      <input id="searchHeader" type="search" results="5" name="searcher" placeholder="Search...">
      </input>
    )
  }
}

export default App;
