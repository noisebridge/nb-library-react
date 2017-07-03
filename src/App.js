import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BooksView from './booksview.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="images/nblogoani.gif" className="App-logo" alt="logo" />
          <h2>Welcome to Noisebridge Library</h2>
        </div>

        <BooksView></BooksView>

        <p className="App-intro">
          To help make the digital interface to the Noisebridge Library see:
          <a href="https://github.com/nb-library-wg/nb-library-react">
          The github repo</a> for the front end of this project.
        </p>
      </div>
    );
  }
}

export default App;
