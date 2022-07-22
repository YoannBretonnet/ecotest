// == Style
import './styles.scss';
import { Box, IconButton } from '@mui/material';

import CarouselComponent from 'src/components/Carousel';

import { useSelector, useDispatch } from 'react-redux';
import { openCloseConnectionModal } from 'src/actions/authentification';

import {
  BiUser,
} from 'react-icons/bi';

// == Composant
function Main() {
  const dispatch = useDispatch();
  const args = {
    size: '6vh',
  };
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
      <Box component="section" sx={{ position: 'fixed', right: '1vw', top: '92vh', width: 'fit-content' }}>
        <IconButton
          onClick={() => dispatch(openCloseConnectionModal())}
        >
          <BiUser size={args.size} />
        </IconButton>
      </Box>
    </Box>
  );
}

// == Export
export default Main;
