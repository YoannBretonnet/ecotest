import { useState } from 'react';

// == Style
import './styles.scss';
import {
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { openCloseConnectionModal } from 'src/actions/authentification';
import { openCloseMenu } from 'src/actions/usability';

import {
  BiUser,
  BiDotsVerticalRounded,
} from 'react-icons/bi';

import CarouselComponent from 'src/components/Carousel';
import MenuIsConnnected from './MenuIsConnnected';

// == Composant
function Main() {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.auth.isConnected);
  const { isOpen } = useSelector((state) => state.usability.menu);
  const args = {
    size: 6,
  };
  const [inputMenu, setinputMenu] = useState(null);
  const handleClick = (event) => {
    dispatch(openCloseMenu(true));
    setinputMenu(event.currentTarget);
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
      <Box
        component="section"
        sx={{
          position: 'fixed', right: '0', bottom: '0', width: 'fit-content',
        }}
      >
        {
        !isConnected ? (
          <IconButton
            onClick={() => dispatch(openCloseConnectionModal())}
          >
            <BiUser size={`${args.size}vh`} />
          </IconButton>
        ) : (
          <>
            <Tooltip title="Settings">
              <IconButton
                onClick={handleClick}
                aria-controls={isOpen ? 'account-menu' : undefined}
                aria-haspopup="true"
              >
                <BiDotsVerticalRounded size={`${args.size}vh`} />
              </IconButton>
            </Tooltip>
            <MenuIsConnnected
              inputMenu={inputMenu}
              setinputMenu={setinputMenu}
            />
          </>
        )
      }
      </Box>
    </Box>
  );
}

// == Export
export default Main;
