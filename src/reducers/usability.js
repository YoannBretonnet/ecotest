import {
  OPEN_CLOSE_MENU,
} from 'src/actions/usability';

export const initialState = {
  menu: {
    isOpen: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_CLOSE_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          isOpen: action.state,
        },
      };
    default:
      return state;
  }
};

export default reducer;
