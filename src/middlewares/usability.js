/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
import { OPEN_CLOSE_ACCOUNT_UPDATE_MODAL, makePasswordUpdatableOrNot } from 'src/actions/authentification';

const usability = (store) => (next) => (action) => {
  switch (action.type) {
    case OPEN_CLOSE_ACCOUNT_UPDATE_MODAL:
      next(action);
      store.dispatch(makePasswordUpdatableOrNot(false));
      break;
    default:
      return next(action);
  }
};

export default usability;
