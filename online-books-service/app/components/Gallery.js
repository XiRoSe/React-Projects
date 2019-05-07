import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    //alternate, if no imageLink was found.
    let alternate = 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';

    //returns a collection of images which are clickable to infoLink.
    return (
      <div>{
        this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a
              key={index}
              className="book"
              href={infoLink}
              target="_blank"
            >
              <img
                src={imageLinks.thumbnail !== undefined ? imageLinks.thumbnail : alternate}
                alt="book image"
                className="book-img" />
              <div className="book-text">
                {title}
              </div>
            </a>
          );
        })
      }</div>
    );
  }
}

export default Gallery;