import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Gallery),
    document.getElementById('mount')
  );
});
