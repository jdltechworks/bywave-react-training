import React, { Component } from 'react';
import { render } from 'react-dom';

class Hello extends Component  {
  render() {
    return(
      <div>Hello from Dummy</div>
    );
  }
}

render(<Hello />, document.getElementById('app'));

if(process.env.NODE_ENV === 'development') {
  module.hot.accept();
}