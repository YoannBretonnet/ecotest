import { OPEN_CLOSE_CAR_MODAL } from 'src/actions/mapSettings';

export const initialState = {
  carSettingsModal: {
    isOpen: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_CLOSE_CAR_MODAL:
      return {
        ...state,
        carSettingsModal: {
          ...state.carSettingsModal,
          isOpen: !state.carSettingsModal.isOpen,
        },
      };
    default:
      return state;
  }
};

export default reducer;
