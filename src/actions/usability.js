export const OPEN_CLOSE_MENU = 'OPEN_CLOSE_MENU';
export const GET_TEAM_DATA = 'GET_TEAM_DATA';
export const GET_TEAM_DATA_SUCCESS = 'GET_TEAM_DATA_SUCCESS';

export const openCloseMenu = (state) => ({
  type: OPEN_CLOSE_MENU,
  state,
});

export const getTeamData = () => ({
  type: GET_TEAM_DATA,
});

export const getTeamDataSuccess = (data) => ({
  type: GET_TEAM_DATA_SUCCESS,
  data,
});
