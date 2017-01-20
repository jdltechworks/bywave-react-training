import React, { Component } from 'react';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import ProductList from './ProductList';
const Boot = () => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/products(/:id)" component={ProductList}></Route>
      </Route>
    </Router>
  );
}

export default Boot;