/* eslint-disable no-case-declarations */
import axios from 'axios';

import {
  GET_TEAM_DATA,
  getTeamDataSuccess,
} from 'src/actions/usability';

const getTeamDataModdleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_TEAM_DATA:
      next(action);
      const config = {
        method: 'get',
        url: 'https://eco-roads.herokuapp.com/api/v1/team',
      };
      axios(config)
        .then(({ data }) => {
          store.dispatch(getTeamDataSuccess(data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      return next(action);
  }
};

export default getTeamDataModdleware;
