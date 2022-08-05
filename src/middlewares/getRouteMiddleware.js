/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import axios from 'axios';

import {
  GET_ROUTE,
  GET_ROUTE_SUCCESS,
  getRouteSuccess,
  getRouteFail,
} from 'src/actions/mapData';

import {
  openCloseInterestPointModal,
} from 'src/actions/mapSettings';

const connectUser = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ROUTE:
      next(action);
      const accessToken = localStorage.getItem('accessToken');
      const stateGetRoute = store.getState();
      const configGetRoute = {
        method: 'post',
        url: 'https://eco-roads.herokuapp.com/api/v1/map',
        withCredentials: true,
        headers: accessToken ? ({ 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('accessToken')}` }) : ({ 'Content-Type': 'application/json' }),
        data: {
          location: stateGetRoute.mapSettings.localisationSettingsModal.DepartSelected,
          arrival: stateGetRoute.mapSettings.localisationSettingsModal.ArrivSelected,
          categories: stateGetRoute.mapSettings.interestPointModal.selected.map((option) => option.id),
          car_id: stateGetRoute.mapSettings.carSettingsModal.carValue,
        },
      };
      axios(configGetRoute)
        .then(({ data }) => {
          store.dispatch(getRouteSuccess(data, action.navigate));
        })
        .catch((error) => {
          store.dispatch(getRouteFail(Object.values(error.response.data)[0]));
        });
      break;
    case GET_ROUTE_SUCCESS:
      next(action);
      store.dispatch(openCloseInterestPointModal());
      action.navigate('/map');
      break;
    default:
      return next(action);
  }
};

export default connectUser;
