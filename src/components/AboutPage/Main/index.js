import { useState } from 'react';

// == Style
import './styles.scss';
import {
  Box,
  IconButton,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import { openCloseConnectionModal } from 'src/actions/authentification';
import { openCloseMenu } from 'src/actions/usability';

import {
  BiUser,
  BiDotsVerticalRounded,
} from 'react-icons/bi';

import CarouselComponent from 'src/components/Carousel';
import StepsComponent from 'src/components/StepsComponent';
import MenuIsConnnected from 'src/components/MenuIsConnnected';

// == Composant
function Main() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('mobile'));
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
  // display: 'flex', flexDirection: 'row-reverse', margin: '10vh 0 15vh'
  return (
    <Box component="main" id="main-AboutPage">
          <Box component="section" sx={{ margin: '4vh 5.5vh 0' }}>
            <h1 className="about-title">
              A propos d'E-co Roads
            </h1>
            <p className="about-accroche">
              E-co Roads a été fondé en 2022 dans le but d'aider les proppriétaires de voitures électriques à partir en road trip. 
              Notre équipe propose ainsi une application générant des trajets liant la localisation des stations de rechargement avec
              une liste de sites à visiter. Régulièrement, nous proposons de nouveaux lieux éco-friendly qui partagent les valeurs
              de nos utlisateurs.
            </p>

            <h2 className="about-title">
              Contactez-nous
            </h2>
            <p className="about-accroche">
              <a href="mailto: hello@eco-roads.com">hello@eco-roads.com</a>
            </p>
          </Box>
       
      {matches ? (
        <Box
          component="section"
          sx={{
            position: 'fixed', right: '0', bottom: '0', top: 'unset', width: 'fit-content',
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
      ) : (
        <Box
          component="section"
          sx={{
            position: 'fixed', right: '0', bottom: 'unset', top: '0', width: 'fit-content',
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
      )}
    </Box>
  );
}

// == Export
export default Main;
