/* eslint-disable no-case-declarations */
import axios from 'axios';

import {
  CONNECT_USER,
  connectUserFail,
  connectUserSuccess,
  CONNECT_USER_SUCCESS,
  getProfilSuccess,
  getProfilFail,
  GET_PROFIL_FAIL,
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
        .then(() => {
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
          store.dispatch(getProfilSuccess(response.data));
        })
        .catch((error) => {
          switch (error.response.status) {
            case 401:
              store.dispatch(getProfilFail());
              break;
            default:
              break;
          }
        });
      next(action);
      break;
    case GET_PROFIL_FAIL:
      const configRefreshToken = {
        method: 'get',
        url: 'https://eco-roads.herokuapp.com/api/v1/refresh_token',
        // withCredentials: true,
      };
      axios(configRefreshToken)
        .then(() => {
          console.log('refresh token received');
          store.dispatch(connectUserSuccess());
        })
        .catch((error) => {
          console.log(error);
          console.log('refresh token failed');
        });
      next(action);
      break;
    default:
      return next(action);
  }
};

export default connectUser;
