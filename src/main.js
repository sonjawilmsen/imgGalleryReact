import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Gallery';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Gallery),
    document.getElementById('mount')
  );
});
