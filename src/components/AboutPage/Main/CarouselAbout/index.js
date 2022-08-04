/* eslint-disable max-len */
// == Style
import './styles.scss';

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, useMediaQuery,} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import {
  BiChevronLeft,
  BiChevronRight,
} from 'react-icons/bi';

// == Composant
function CarouselComponent() {
  const items = [
    {
      name: 'Gaetan',
      image: 'Audi_E-tron_GT_Quattro_remove.png',
      description: 'Product Owner',
    },
    {
      name: 'Oceane',
      image: 'Tesla_Model_Y2_remove.png',
      description: 'Scrum Master',
    },
    {
      name: 'Alex',
      image: 'peugeot-e-208-1.png',
      description: 'Back end',
    },
  ];
  const args = {
    squareSize: '80vw',
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('laptop'));
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
            color: 'none',
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
                width: args.squareSize, height: args.squareSize, background: 'transparent', border: '0.2vh solid grey', borderRadius: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10% 0 0',
              }}
            >
            <img className={matches ? 'main-img-desktop' : 'main-img'} crossOrigin="anonymous" src={`https://eco-roads.herokuapp.com/images/${item.image}`}  alt={item.name}
              width="100px" />
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
