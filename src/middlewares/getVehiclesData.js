/* eslint-disable no-case-declarations */
import axios from 'axios';

import {
  GET_VEHICLES_DATA,
  getVehiclesDataSuccess,
  getVehiclesDataFail,
} from 'src/actions/mapSettings';

const getVehiclesData = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_VEHICLES_DATA:
      next(action);
      const config = {
        method: 'get',
        url: 'https://eco-roads.herokuapp.com/api/v1/cars',
      };
      axios(config)
        .then((response) => {
          store.dispatch(getVehiclesDataSuccess(response.data.brands, response.data.cars));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(getVehiclesDataFail(Object.values(error.response.data)[0]));
        });
      break;
    default:
      return next(action);
  }
};

export default getVehiclesData;
