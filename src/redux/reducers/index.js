import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Product from './Product';

const mainReducer = combineReducers({
  Product,
  routing: routerReducer
});

export default mainReducer;