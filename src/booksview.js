import React, { Component } from 'react';
import './App.css';

import {
  Link
} from "react-router-dom";

class BooksView extends Component {
  constructor(props) {
  super(props);
  this.state = {books: []};

  }

  componentDidMount() {
//  this.interval = setInterval(() => this.tick(), 1000);
    console.log('it did mount')

    console.log("state in did mount", this.state)
    var that= this;
    let booksReq = new XMLHttpRequest();

    booksReq.onload = function(e) {
      var jsonDat = booksReq.response; // not responseText
      /* ... */
      console.log('got a response')
      console.log(jsonDat)
      let counter = 0;

      let booksArray = jsonDat.map((d)=>{
        d.key = counter;
        counter++;
        return d;
      });

      that.setState({books:booksArray})

    }

    booksReq.open("GET", 'data/samplebooks.json')
    booksReq.responseType = "json"

    booksReq.send();
  }

  render() {
    console.log(this.state)
  //  let bookList =
    return (
      <div id="booklib">
        {this.state.books.map((q)=>{
            return (
                <BookListItemView book={q} key={q.key}></BookListItemView>
              )
            })
        }
      </div>
    );
  }
}


class BookListItemView extends Component {
  render() {
    var bookLink = "/book/" + this.props.book.title;
    const imgAltStr = "Book cover";
    let coverlink = this.props.book.openlibrary_medcover_url;

    if(coverlink.length <= 0) {
      coverlink = "images/lincoln-inaug-bible.jpg"
    }
    return (
      <Link to={{
          pathname:bookLink,
          state: {book: this.props.book}
        }}>
        <div className="bookDiv">
          <div className="bookTextDiv">
          <h3>{this.props.book.title}</h3>
          <h5>By: {this.props.book.authors} </h5>
          </div>
          <div className="bookCoverDiv">
            <span className="helper">
            </span>
            <img src={coverlink} className="bookCoverImg"
              alt={imgAltStr}>
            </img>
          </div>
        </div>
      </Link>
    )
  }
}

export default BooksView;
