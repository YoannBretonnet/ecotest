import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import getLocalisation from 'src/middlewares/getLocalisation';
import getSelectedInterestPoint from 'src/middlewares/getSelectedInterestPoint';
import connectUser from 'src/middlewares/connectUser';
import getVehiclesData from 'src/middlewares/getVehiclesData';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    getLocalisation,
    getSelectedInterestPoint,
    connectUser,
    getVehiclesData,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
