import { OPEN_CLOSE_CAR_MODAL, CHANGE_MAP_SETTING_INPUT_VALUE } from 'src/actions/mapSettings';

export const initialState = {
  carSettingsModal: {
    isOpen: false,
    brandsValue: 'Hyundai',
    carValue: 'Twingo',
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
    case CHANGE_MAP_SETTING_INPUT_VALUE:
      return {
        ...state,
        [action.modalElement]: {
          ...state[action.modalElement],
          [action.inputElement]: action.inputValue,
        },
      };
    default:
      return state;
  }
};

export default reducer;
