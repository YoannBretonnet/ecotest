/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
//import {  } from 'src/actions/authentification';

const index = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      return next(action);
  }
};

export default index;
