/* eslint-disable no-case-declarations */
import axios from 'axios';

import {
  CONNECT_USER,
} from 'src/actions/authentification';

const connectUser = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      next(action);
      const state = store.getState();
      const config = {
        method: 'post',
        url: 'https://eco-roads.herokuapp.com/api/v1/user/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: state.auth.connectionModal.emailValue,
          password: state.auth.connectionModal.passwordValue,
        },
      };
      axios(config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((_error) => {
          console.log(_error);
        });
      break;
    default:
      return next(action);
  }
};

export default connectUser;
