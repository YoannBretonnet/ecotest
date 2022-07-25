import { OPEN_CLOSE_INTEREST_POINT_MODAL, SELECT_INTEREST_POINT_ADD, SELECT_INTEREST_POINT_DELETE } from 'src/actions/mapSettings';

export const initialState = {
  interestPointModal: {
    isOpen: false,
    selected: [],
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_CLOSE_INTEREST_POINT_MODAL:
      return {
        ...state,
        interestPointModal: {
          ...state.interestPointModal,
          isOpen: !state.interestPointModal.isOpen,
        },
      };
    case SELECT_INTEREST_POINT_ADD:
      return {
        ...state,
        interestPointModal: {
          ...state.interestPointModal,
          selected: [
            ...state.interestPointModal.selected,
            action.selectedOption,
          ],
        },
      };
    case SELECT_INTEREST_POINT_DELETE:
      return {
        ...state,
        interestPointModal: {
          ...state.interestPointModal,
          selected: [
            // eslint-disable-next-line max-len
            ...state.interestPointModal.selected.filter((option) => option.id !== action.selectedOption.id),
          ],
        },
      };
    default:
      return state;
  }
};

export default reducer;
