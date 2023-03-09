export const GET_ROUTE = 'GET_ROUTE';
export const GET_ROUTE_SUCCESS = 'GET_ROUTE_SUCCESS';
export const GET_DISTANCE = 'GET_DISTANCE';

export const getRoute = () => ({
  type: GET_ROUTE,
});

export const getRouteSuccess = (data) => ({
  type: GET_ROUTE_SUCCESS,
  data,
});

export const getDistance = () => ({
  type: GET_DISTANCE,
});

