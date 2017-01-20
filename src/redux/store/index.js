import _ from 'lodash';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore, compose } from 'redux';

import mainReducer from '../reducers';

const middlewares = [thunk];

let composerEnhancers = null;

if(_.eq(process.env.NODE_ENV, 'development')) {
  composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composerEnhancers = compose;
}

const store = createStore(mainReducer, composerEnhancers(applyMiddleware(...middlewares)));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;