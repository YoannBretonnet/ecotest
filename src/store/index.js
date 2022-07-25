import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import getLocalisation from 'src/middlewares/getLocalisation';
import getSelectedInterestPoint from 'src/middlewares/getSelectedInterestPoint';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    getLocalisation,
    getSelectedInterestPoint,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
