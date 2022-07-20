/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
import { HANDLE_INDEX, handleIndexSucces } from 'src/actions';

const index = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_INDEX:
      next(action);
      break;
    default:
      return next(action);
  }
};

export default index;
