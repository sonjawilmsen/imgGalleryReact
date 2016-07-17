import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

let urls = [
  '/react-image-gallery/img/cat1.jpg',
  '/react-image-gallery/img/cat2.jpg',
  '/react-image-gallery/img/cat3.jpg',
];

ReactDOM.render(
  <Gallery imageUrls={urls}/>,
  document.getElementById('mount')
);
