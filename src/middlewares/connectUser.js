/* eslint-disable no-case-declarations */
import axios from 'axios';

import {
  CONNECT_USER,
  connectUserFail,
  connectUserSuccess,
  CONNECT_USER_SUCCESS,
} from 'src/actions/authentification';

const connectUser = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      const state = store.getState();
      const configConnect = {
        method: 'post',
        url: 'https://eco-roads.herokuapp.com/api/v1/user/login',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: state.auth.connectionModal.emailValue,
          password: state.auth.connectionModal.passwordValue,
        },
      };
      axios(configConnect)
        .then((response) => {
          store.dispatch(connectUserSuccess());
        })
        .catch((error) => {
          store.dispatch(connectUserFail(Object.values(error.response.data)[0]));
        });
      next(action);
      break;
    case CONNECT_USER_SUCCESS:
      const configProfile = {
        method: 'get',
        url: 'https://eco-roads.herokuapp.com/api/v1/user/profile',
        withCredentials: true,
      };
      axios(configProfile)
        .then((response) => {
          console.log(response.data);
          // store.dispatch(getProfil());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    default:
      return next(action);
  }
};

export default connectUser;
