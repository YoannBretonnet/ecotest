import {
  OPEN_CLOSE_MENU,
} from 'src/actions/usability';

export const initialState = {
  startEndCoords: {
    stLong: -1.1341349301277615,
    stLat: 46.159711550901854,
    arLong: -0.585122,
    arLat: 44.834081,
  },
  pointCoords: {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Fort Louvois',
            adresse: 'null Port Ostréicole, 17560 Bourcefranc-le-Chapus',
            icon: 'museum-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.168980545677202,
              45.85509869130901,
            ],
          },
        },
        {
          type: 'Feature',
          borne: true,
          properties: {
            title: 'Totalenergies',
            adresse: '2 Rue Ovide Beillard, 17320 Marennes-Hiers-Brouage',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.1018181865051426,
              45.82302303618504,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: "Cité de L'huître",
            adresse: 'null Rue des Martyrs, 17320 Marennes-Hiers-Brouages',
            icon: 'restaurant-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.1220728594954228,
              45.794046110104816,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Mornac-sur-Seudre',
            adresse: '5 Place de la Cure, 17113 Mornac-sur-Seudre',
            icon: 'museum-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.0280260461863735,
              45.709209370500766,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Phare de la Coubre',
            adresse: 'null Lieu-dit de la Coubre, 17390 La Tremblade',
            icon: 'attraction-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.233257459389967,
              45.69672900089735,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Le Pont du Diable',
            adresse: 'null Avenue des Pierrières, 17420 Saint-Palais-sur-Mer',
            icon: 'attraction-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.0980069210895878,
              45.640843892080355,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Eglise Notre-Dame de Royan',
            adresse: '1 Avenue des Congrès, 17200 Royan',
            icon: 'museum-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.032675311131723,
              45.62397462297659,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Restaurant les Filets Bleus',
            adresse: '14 Rue Notre Dame, 17200 Royan',
            icon: 'restaurant-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.0309617901459203,
              45.62410719016474,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Pointe de Suzac',
            adresse: 'null Chemin du Fort de Suzac, 17110 Saint-George-de-Didonne',
            icon: 'attraction-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -0.9919487301591825,
              45.57788947355588,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Ferry Direction Royan',
            adresse: '19 Avenue du Phare de Cordouan, 33123 Le Verdon-sur-Mer',
            icon: 'attraction-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.0634986896969574,
              45.569077942132665,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Soulac-sur-Mer',
            adresse: '2 Rue Jean Edmond Laporte, 33780 Soulac-sur-Mer',
            icon: 'museum-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.121711361983233,
              45.51389059160941,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Ferme Eau Médoc',
            adresse: 'null Lieu-dit La Petite Canau, 33590 Saint-Vivien de Médoc',
            icon: 'restaurant-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.014682609918304,
              45.45483154194093,
            ],
          },
        },
        {
          type: 'Feature',
          borne: true,
          properties: {
            title: 'Totalenergies',
            adresse: '44 route de saint vivien, 33590 Vensac',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -1.0353373662736858,
              45.41039900027439,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: "Tour de l'honneur",
            adresse: '17 Rue Pierre Curie, 33340 Lesparre-Médoc',
            icon: 'museum-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -0.9431911374190362,
              45.307553327936226,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Nauera bières et vins',
            adresse: 'null ZA, Le Treytin, 33112 Saint-Laurent-Médoc',
            icon: 'restaurant-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -0.8112046473153379,
              45.16046586060606,
            ],
          },
        },
        {
          type: 'Feature',
          borne: true,
          properties: {
            title: 'Totalenergies',
            adresse: '21 Rue Camille Maumey, 33112 Saint-Laurent-Médoc',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -0.8219890423458418,
              45.1494365449882,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Fort Médoc',
            adresse: 'null Avenue du Fort Médoc, 33460 Cussac-Fort-Médoc',
            icon: 'museum-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -0.7048972143458369,
              45.11122065991949,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Ferme de la Noune',
            adresse: '55 Rue de Noune, 33480 Brach',
            icon: 'restaurant-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -0.9216131108945604,
              45.07055778344622,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Eglise de Saint-Seurin',
            adresse: "null Place de l'Eglise, 33460 Lamarque",
            icon: 'museum-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -0.7145066398140052,
              45.09628025048654,
            ],
          },
        },
        {
          type: 'Feature',
          borne: false,
          properties: {
            image: 'https://eco-roads.herokuapp.com/images/jardin_japonais.jpg',
            title: 'Eglise de Saint-Seurin',
            adresse: "null Place de l'Eglise, 33460 Lamarque",
            icon: 'museum-15',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              -0.7145066398140052,
              45.09628025048654,
            ],
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
