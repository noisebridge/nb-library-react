// View that shows all books in list form

import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BookListItemView extends Component {
  render() {
    var bookLink = "/book/" + this.props.book.title;
    const imgAltStr = `Cover for ${this.props.book.title}`;
    let coverlink = this.props.book.openlibrary_medcover_url;

    if(coverlink.length <= 0) {
      coverlink = "images/lincoln-inaug-bible.jpg"
    }
    return (
      <Link to={{
          pathname: bookLink,
          state: {book: this.props.book}
        }}>
        <div className="bookDiv">
          <div className="bookText">
            <p>{this.props.book.title}</p>
            <p>By: {this.props.book.authors}</p>
          </div>
          <div className="bookCover">
            <img
              className="bookCoverImg"
              src={coverlink}
              alt={imgAltStr}
            />
          </div>
        </div>
      </Link>
    )
  }
}

export default BookListItemView;
