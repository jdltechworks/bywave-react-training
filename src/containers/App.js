import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    const { props } = this;
    const { children } = props;
    return(
      <div className="container">
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>
        { children }
      </div>
    );
  }
}