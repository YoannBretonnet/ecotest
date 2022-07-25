/* eslint-disable no-case-declarations */
import {
  SELECT_INTEREST_POINT,
  selectInterestPointDelete,
  selectInterestPointAdd,
} from 'src/actions/mapSettings';

const getLocalisation = (store) => (next) => (action) => {
  switch (action.type) {
    case SELECT_INTEREST_POINT:
      next(action);
      // console.log(action);
      if (action.boolean) {
        store.dispatch(selectInterestPointAdd(action.selectedOption));
      }
      else {
        store.dispatch(selectInterestPointDelete(action.selectedOption));
      }
      break;
    default:
      return next(action);
  }
};

export default getLocalisation;
