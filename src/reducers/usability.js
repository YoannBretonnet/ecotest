import {
  OPEN_CLOSE_MENU,
  GET_TEAM_DATA_SUCCESS,
} from 'src/actions/usability';

export const initialState = {
  menu: {
    isOpen: false,
  },
  team: [],
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
    case GET_TEAM_DATA_SUCCESS:
      return {
        ...state,
        team: [
          ...action.data,
        ],
      };
    default:
      return state;
  }
};

export default reducer;
