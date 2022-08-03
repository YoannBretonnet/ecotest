import {
  OPEN_CLOSE_MENU,
} from 'src/actions/usability';

export const initialState = {
  startEndCoords: {
    stLong: -1.54027,
    stLat: 47.21129,
    arLong: -2.00719,
    arLat: 48.63575,
  },
  pointCoords: {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Brela%27s_small_harbour.jpeg',
            title: 'Musée Agri-Rétro',
            description: 'Près de 300 tracteurs et autres engins agricoles nous retracent une belle évolution de la technique.',
            icon: 'museum-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.57609, 47.32144,
            ],
          },
        },
        {
          type: 'Feature',
          properties: {
            // image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Brela%27s_small_harbour.jpeg",
            title: 'SuperChargeur',
            // description: "Près de 300 tracteurs et autres engins agricoles nous retracent une belle évolution de la technique.",
            // icon: "museum-15"
          },
          geometry: {
            type: 'Point',
            coordinates: [-1.61925, 47.49784],
          },
        },
        {
          type: 'Feature',
          properties: {
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Brela%27s_small_harbour.jpeg',
            title: 'Musée Agri-Rétro',
            description: 'Près de 300 tracteurs et autres engins agricoles nous retracent une belle évolution de la technique.',
            icon: 'museum-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.6609, 47.7144,
            ],
          },
        },

        {
          type: 'Feature',
          properties: {
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Brela%27s_small_harbour.jpeg',
            title: 'Etang de la Vayrie',
            description: 'Endroit sympathique et calme pour une promenade.',
            icon: 'park-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.78609, 47.97144,
            ],
          },
        },
        {
          type: 'Feature',
          properties: {
            // image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Brela%27s_small_harbour.jpeg",
            title: 'SuperChargeur',
            // description: "Près de 300 tracteurs et autres engins agricoles nous retracent une belle évolution de la technique.",
            icon: 'museum-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [-1.89116, 48.3828],
          },
        },
      ],
    },
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
