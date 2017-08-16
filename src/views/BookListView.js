// Grabs data from JSON (TODO: Move this json fetching logic to a model?)
// 

import React, { Component } from 'react';
import '../App.css';
import BookListItemView from './BookListItemView';

class BookListView extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    //  this.interval = setInterval(() => this.tick(), 1000);
    console.log('it did mount')

    console.log("state in did mount", this.state)
    let booksReq = new XMLHttpRequest();
    booksReq.onload = (e) => {
      var jsonDat = booksReq.response; // not responseText
      /* ... */
      console.log('got a response');
      console.log(jsonDat);
      let counter = 0;
      let booksArray = jsonDat.map((book) => {
        book.key = counter;
        counter++;
        return book;
      });
      this.setState({ books: booksArray });
    }

    // Mocking json data
    booksReq.open("GET", 'data/samplebooks.json');
    booksReq.responseType = "json";
    booksReq.send();
  }

  render() {
    console.log(this.state)
  //  let bookList =
    return (
      <div id="booklib">
        {this.state.books.map((book) => {
            return (
                <BookListItemView book={book} key={book.key}></BookListItemView>
              )
            })
        }
      </div>
    );
  }
}

export default BookListView;
