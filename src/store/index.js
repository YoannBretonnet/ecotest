import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import index from 'src/middlewares/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    index,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
