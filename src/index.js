import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import Boot from './containers';

render(<Boot />, document.getElementById('app'));

if(process.env.NODE_ENV === 'development') {
  module.hot.accept();
}