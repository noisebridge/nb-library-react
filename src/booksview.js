import React, { Component } from 'react';
import './App.css';

//import logo from './logo.svg';
let d3 = require('d3');





class BooksView extends Component {
  constructor(props) {
  super(props);
  this.state = {secondsElapsed: 0};
//  console.log(bookstuff)

  }

  componentDidMount() {
//  this.interval = setInterval(() => this.tick(), 1000);
  console.log('it did mount')
  var booklib = d3.select('#booklib')

// out books data request which we can change to actually
  d3.json('data/samplebooks.json', function(err, data) {
// if you want to see what comes Back
//    console.log(err, data);
    if(err) {
      console.log("There was an error getting the samplebook data.");
      throw err;
    }

    let booksArray = data;

//
    booklib.selectAll('.bookDiv')
      .data(booksArray)
      .enter()
      .append('div')
      .attr('class', 'bookDiv')
      .html(function(d, e){
        console.log(d)
        let titleStr = '<h3>' + d.title + '</h3>';
        let authorStr = '<h5>By: ' + d.authors + '</h5>';
        let sampimg = '<div class="bookCoverDiv"><span class="helper"></span><img src="images/lincoln-inaug-bible.jpg" class="bookCoverImg"></img></div>'
        return '<div class="bookTextDiv">'  + titleStr + authorStr + '</div>' + sampimg;
      })

  })


  //  .text('book')
  }

  render() {
    return (
      <div id="booklib">
      </div>
    );
  }
}


export default BooksView;
