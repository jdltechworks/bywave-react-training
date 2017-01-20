import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { history } from '../redux/store';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import ProductList from './ProductList';
const Boot = () => {
  return(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="/products(/:id)" component={ProductList}></Route>
        </Route>
      </Router>
    </Provider>
  );
}

export default Boot;