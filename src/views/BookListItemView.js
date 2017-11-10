// View that shows all books in list form

import React, { Component } from 'react';
import { Link } from "react-router-dom";

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

export default BookListItemView;