/* eslint-disable max-len */
// == Style
import './styles.scss';

import Alex from 'src/assets/images/Alex.png';
import Oceane from 'src/assets/images/Oceane.png';
import Gaetan from 'src/assets/images/Gaetan.png';

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';

import {
  BiChevronLeft,
  BiChevronRight,
} from 'react-icons/bi';

// == Composant
function CarouselComponent() {
  const items = [
    {
      name: 'Gaetan',
      image: {Gaetan},
      description: 'Product Owner',
    },
    {
      name: 'Oceane',
      image: {Oceane},
      description: 'Scrum Master',
    },
    {
      name: 'Alex',
      image: {Alex},
      description: 'Back end',
    },
  ];
  const args = {
    squareSize: '25vh',
  };
  return (
    <Box component="section" sx={{ margin: '2vh auto 0 auto', width: 'fit-content', height: 'fit-content' }}>
      <Carousel
        navButtonsAlwaysVisible
        cycleNavigation
        fullHeightHover
        swipe
        animation="slide"
        autoPlay={false}
        indicators={false}
        sx={{ width: args.squareSize, height: args.squareSize, margin: 'auto' }}
        NextIcon={<BiChevronRight size="8vh" />}
        PrevIcon={<BiChevronLeft size="8vh" />}
        navButtonsProps={{
          style: {
            backgroundColor: 'transparent',
            color: 'black',
            height: 'fit-content',
            margin: '0',
            padding: '0',
          },
        }}
      >
        {
          items.map((item, i) => (
            <Paper
              key={i}
              sx={{
                width: args.squareSize, height: args.squareSize, background: 'transparent', border: '0.4vh solid black', borderRadius: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10% 0 0',
              }}
            >
              <img 
              className="carouselAbout-image" 
              scr={item.image}
              alt={item.name}
              width="100px"
              />
              <p className="carouselAbout-content">{item.description}</p>
            </Paper>
          ))
        }
      </Carousel>
    </Box>
  );
}

// == Export
export default CarouselComponent;
