import { OPEN_CLOSE_CAR_MODAL } from 'src/actions/mapSettings';

export const initialState = {
  carSettingsModal: {
    isOpen: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
