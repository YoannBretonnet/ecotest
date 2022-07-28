import {
} from 'src/actions/userProfile';

export const initialState = {
  profile: {
    carOwned: {
      brand: {
        id: 5,
        name: 'Tesla',
      },
      car: {
        id: 27,
        model: 'Model S',
        image: 'tesla_model_s.png',
        brand_id: 5,
        name: 'Supercharger',
      },
    },
    localisation: {
      adress: 'Rue Belleville',
      street_number: 108,
      city: "Paris",
      zipcode: 33000,
      lat: 44.83428425452483,
      lon: -0.584988886449385,
    },
    categories: [
      {
        id: 4,
        name: 'Nature',
      },
      {
        id: 5,
        name: 'Sport',
      },
      {
        id: 6,
        name: 'Parcs',
      },
    ],

  },
};

const userProfile = (state = initialState, action = {}) => {
  switch (action.type) {
    // case '':
    //   return {
    //     ...state,

    //   };
    default:
      return state;
  }
};

export default userProfile;
