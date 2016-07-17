import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

let urls = [
  'http://wallwindow.com/wp-content/uploads/2014/09/cute-cat-gif-tumblr.jpg',
  '/react-image-gallery/img/cat2.jpg',
  '/react-image-gallery/img/cat3.jpg',
];

ReactDOM.render(
  <Gallery imageUrls={urls}/>,
  document.getElementById('mount')
);
