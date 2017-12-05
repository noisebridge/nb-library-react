// a form to add new books
// should have basically all the stuff in https://library.noisebridge.net/new/

import React, { Component } from 'react';

class AddBookForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    input: ''
  };
}

handleInputChange = (e) => {
  this.setState({input: e.target.value});
}

  render() {
    return (
      <form className="addBookForm">
        <h2>Add a Book</h2>
        <p>Have a book that's not in the library?
          Search for it on <a href="https://openlibrary.org/">Open Library</a> and paste its OLID below!</p>
        <div className="inputFieldGroup">
          <label htmlFor="olid">OLID</label>
          <input value={this.state.input} onChange={this.handleInputChange} id="olid"/>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default AddBookForm;
