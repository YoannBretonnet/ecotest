import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import getSelectedInterestPoint from 'src/middlewares/getSelectedInterestPoint';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    getSelectedInterestPoint,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
