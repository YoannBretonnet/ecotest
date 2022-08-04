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
      name: 'Gaëtan Santucci',
      image: 'gaetan.png',
      description: 'Product Owner',
    },
    {
      name: 'Océane Vignot',
      image: 'oceane.png',
      description: 'Scrum Master, Git Master',
    },
    {
      name: 'Alexandre Humbert',
      image: 'alex.png',
      description: 'Lead Dev Back',
    },
      {
      name: 'Aymen El Bakkaly',
      image: 'aymen.png',
      description: 'Lead Dev Front',
    },
    {
      name: 'Yoann Bretonnet',
      image: 'yoann.png',
      description: 'Dev Front',
    },
  ];
  const args = {
    widthSize: '80vw',
    heightSize: '40vh'
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
        sx={{ width: args.widthSize, height: args.heightSize, margin: 'auto' }}
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
                width: args.widthSize, height: args.heightSize, background: 'transparent', border: '0.2vh solid grey', borderRadius: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10% 0 0',
              }}
            >
            
            <img className={matches ? 'mainAbout-img-desktop' : 'mainAbout-img'} crossOrigin="anonymous" src={`https://eco-roads.herokuapp.com/images/${item.image}`}  alt={item.name}
              width="100px" />
              <p className="carouselAbout-name">{item.name}</p>
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
