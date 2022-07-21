// == Style
import './styles.scss';
import Box from '@mui/material/Box';

import CarouselComponent from 'src/components/Carousel';

// == Composant
function Main() {
  return (
    <Box component="main">
      <Box component="section" sx={{ margin: '32vh 1.5vh 0' }}>
        <h1 className="main-title">
          E-co Roads
        </h1>
        <p className="main-accroche">
          Découvrez votre région en toute sérénité au volant de votre voiture électrique
        </p>
      </Box>
      <CarouselComponent />
    </Box>
  );
}

// == Export
export default Main;
