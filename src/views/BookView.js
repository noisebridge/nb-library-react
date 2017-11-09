// Renders the view for a single book.

import React, { Component } from 'react';
import '../App.css';


// BookView should get a book object as one of it's props
class BookView extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    // need to make sure this location shim shame actually exists
    if (this.props.location.state) {
      this.state = {
        book: this.props.location.state.book
      }
    } else {
      this.state = {
        book: {
          name: 'dunno',
          publish_date: 'prehistory',
          subjects: 'subjective',
          title: 'god it all broke',
          openlibrary_medcover_url: "../images/lincoln-inaug-bible.jpg"
        }
      }
    }

  }
  render(target) {
    console.log(this)
    let book = this.state.book;
    return (
      <div className="singleBookDiv">
        <div className="singleBookDesc">
          <h3>
            {this.state.book.title}
          </h3>
          <div>
            <span className="bookDescLabel">Author(s): </span>{this.state.book.authors}
          </div>
          <div>
            <span className="bookDescLabel">Published: </span>
            {book.publish_date}
          </div>
          <div>
            <span className="bookDescLabel">Subjects: </span>
            {book.subjects}
          </div>
          <div>
            <span className="bookDescLabel">Page Count: </span>
            {book.number_of_pages}
          </div>
        </div>
        <div className="singleBookCoverDiv">
          <img src={book.openlibrary_medcover_url} alt="Book Image">
          </img>
        </div>
      </div>

    )
  }
}


export default BookView;
