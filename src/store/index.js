import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import getLocalisation from 'src/middlewares/getLocalisation';
import getSelectedInterestPoint from 'src/middlewares/getSelectedInterestPoint';
import connectUser from 'src/middlewares/connectUser';
import getVehiclesDataMiddleware from 'src/middlewares/getVehiclesDataMiddleware';
import getCategoriesDataMiddleware from 'src/middlewares/getCategoriesDataMiddleware';
import getTeamDataModdleware from 'src/middlewares/getTeamDataModdleware';
import getRouteMiddleware from 'src/middlewares/getRouteMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    getLocalisation,
    getSelectedInterestPoint,
    connectUser,
    getVehiclesDataMiddleware,
    getCategoriesDataMiddleware,
    getTeamDataModdleware,
    getRouteMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
