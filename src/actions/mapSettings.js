export const OPEN_CLOSE_INTEREST_POINT_MODAL = 'OPEN_CLOSE_INTEREST_POINT_MODAL';
export const SELECT_INTEREST_POINT = 'SELECT_INTEREST_POINT';
export const SELECT_INTEREST_POINT_DELETE = 'SELECT_INTEREST_POINT_DELETE';
export const SELECT_INTEREST_POINT_ADD = 'SELECT_INTEREST_POINT_ADD';

export const openCloseInterestPointModal = () => ({
  type: OPEN_CLOSE_INTEREST_POINT_MODAL,
});

export const selectInterestPoint = (boolean, selectedOption) => ({
  type: SELECT_INTEREST_POINT,
  boolean,
  selectedOption,
});

export const selectInterestPointDelete = (selectedOption) => ({
  type: SELECT_INTEREST_POINT_DELETE,
  selectedOption,
});

export const selectInterestPointAdd = (selectedOption) => ({
  type: SELECT_INTEREST_POINT_ADD,
  selectedOption,
});
