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
  openCloseConnectionModal,
  REGISTER_USER,
  registerUserFail,
  registerUserSuccess,
  openCloseAccountCreationModal,
} from 'src/actions/authentification';

const connectUser = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      const state = store.getState();
      // const configConnect = {
      //   method: 'post',
      //   url: 'https://eco-roads.herokuapp.com/api/v1/user/login',
      //   withCredentials: true,
      //   credentials: 'include',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   data: {
      //     email: state.auth.connectionModal.emailValue,
      //     password: state.auth.connectionModal.passwordValue,
      //   },
      // };
      // axios(configConnect)
      //   .then((response) => {
      //     localStorage.setItem('accessToken', response.data.accessToken);
      //     store.dispatch(connectUserSuccess());
      //   })
      //   .catch((error) => {
      //     store.dispatch(connectUserFail(Object.values(error.response.data)[0]));
      //   });
      // const httpHeaders = new Headers();
      // httpHeaders.append('Content-Type', 'application/json');

      // // On consomme l'API pour ajouter en DB
      // const fetchOptions = {
      //   method: 'POST',
      //   mode: 'cors',
      //   headers: httpHeaders,
      //   body: JSON.stringify({
      //     email: state.auth.connectionModal.emailValue,
      //     password: state.auth.connectionModal.passwordValue,
      //   }),
      // };

      // fetch('https://eco-roads.herokuapp.com/api/v1/user/login', fetchOptions)
      //   .then(
      //     (response) => {
      //       localStorage.setItem('accessToken', response.data.accessToken);
      //       store.dispatch(connectUserSuccess());
      //     },
      //   ).catch((error) => {
      //     store.dispatch(connectUserFail(Object.values(error.response.data)[0]));
      //   });

      fetch('https://eco-roads.herokuapp.com/api/v1/user/login', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: state.auth.connectionModal.emailValue,
          password: state.auth.connectionModal.passwordValue,
        }),
      }).then((response) => response.json())
        .then((data) => console.log(data));
      // .catch((error) => {
      //   store.dispatch(connectUserFail(Object.values(error.response.data)[0]));
      // });
      next(action);
      break;
    case CONNECT_USER_SUCCESS:
      console.log(localStorage.getItem('accessToken'));
      const configProfile = {
        method: 'get',
        url: 'https://eco-roads.herokuapp.com/api/v1/user/profile',
        withCredentials: true,
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      };
      axios(configProfile)
        .then((response) => {
          console.log(response.data);
          store.dispatch(getProfilSuccess(response.data));
          store.dispatch(openCloseConnectionModal());
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
      localStorage.removeItem('accessToken');
      const configRefreshToken = {
        method: 'get',
        url: 'https://eco-roads.herokuapp.com/api/v1/refresh_token',
        withCredentials: true,
      };
      axios(configRefreshToken)
        .then((response) => {
          console.log('access token received');
          localStorage.setItem('accessToken', response.data.accesToken);
          store.dispatch(connectUserSuccess());
        })
        .catch((error) => {
          console.log(error);
          console.log('access token failed');
        });
      next(action);
      break;
    case REGISTER_USER:
      next(action);
      const stateRegister = store.getState();
      const configRegister = {
        method: 'post',
        url: 'https://eco-roads.herokuapp.com/api/v1/user/register',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username: stateRegister.auth.accountCreationModal.userNameValue,
          email: stateRegister.auth.accountCreationModal.emailValue,
          password: stateRegister.auth.accountCreationModal.passwordValue,
        },
      };
      axios(configRegister)
        .then((response) => {
          console.log('register received', response);
          store.dispatch(registerUserSuccess());
          store.dispatch(openCloseAccountCreationModal());
          store.dispatch(openCloseConnectionModal());
        })
        .catch((error) => {
          console.log('register failed', error);
          store.dispatch(registerUserFail(Object.values(error.response.data)[0]));
        });
      break;
    default:
      return next(action);
  }
};

export default connectUser;
