// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import DOMPurify from 'dompurify';

import {
  openCloseAccountUpdateModal,
  openCloseConnectionModal,
} from 'src/actions/authentification';

import {
  openCloseCarModal,
} from 'src/actions/mapSettings';

import { openCloseMenu } from 'src/actions/usability';

// == Style
import {
  Box,
  Tooltip,
  IconButton,
  Chip,
  Button,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './styles.scss';

import {
  BiEdit,
  BiUser,
  BiDotsVerticalRounded,
} from 'react-icons/bi';

import MenuIsConnnected from 'src/components/MenuIsConnnected';

// == Composant
function Main() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('laptop'));
  const dispatch = useDispatch();
  const {
    userName,
    car,
    location,
    categories,
  } = useSelector((state) => state.auth.initialUserAccount);
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
    <Box
      component="main"
      sx={{
        display: 'flex', flexDirection: matches ? 'row' : 'column-reverse', justifyContent: 'center', margin: matches ? '15vh auto 0' : '8vh 0 0', width: '100%', maxWidth: '100%', gap: '5%',
      }}
    >
      <Box
        component="article"
        sx={{
          width: 'fit-content', margin: matches ? '0' : 'auto',
        }}
      >
        <Box
          component="article"
          sx={{
            display: 'flex', flexDirection: 'row', margin: 'auto', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <h2 className="main-message">
            {`Bienvenue ${DOMPurify.sanitize(userName, { USE_PROFILES: { html: false } })}`}
          </h2>
          <Tooltip title="Paramètre de sécurité">
            <IconButton
              sx={{ position: 'relative', bottom: '-1vh' }}
              onClick={() => dispatch(openCloseAccountUpdateModal())}
            >
              <BiEdit size="3vh" />
            </IconButton>
          </Tooltip>
        </Box>
        <article className={matches ? 'user-preferences-container-desktop' : 'user-preferences-container'}>
          <article className="user-preferences-container-vehiclesData user-preferences-container-element">
            <p>
              Type de véhicule:
            </p>
            {
            car ? (
              <>
                <Chip label={car.name} />
                <Chip label={car.model} />
              </>
            ) : (
              <Chip label="Aucun véhicule enregistré" />
            )
          }
          </article>
          <article className="user-preferences-container-departureData user-preferences-container-element">
            <p>
              Point de départ:
            </p>
            {
            location ? (
              <Chip label={location.label} />
            ) : (
              <Chip label="Aucune adresse enregistrée" />
            )
          }
          </article>
          <article className="user-preferences-container-departureData user-preferences-container-element">
            <p>
              Centres d'intérêts:
            </p>
            {
            categories[0] ? (
              categories.map((categorie) => <Chip key={categorie.id} label={categorie.category} />)
            ) : (
              <Chip label="Aucune catégorie enregistreée" />
            )
          }
          </article>
          <Tooltip title="Paramètre de préférence">
            <Button
              variant="contained"
              sx={{
                '&.MuiButton-root': {
                  width: 'fit-content', margin: 'auto', backgroundColor: '#6cc573',
                },
              }}
              onClick={() => dispatch(openCloseCarModal())}
            >
              Modifier mes informations de trajet
            </Button>
          </Tooltip>
        </article>
      </Box>
      {
        car ? (
          <img className={matches ? 'main-img-desktop' : 'main-img'} crossOrigin="anonymous" src={`https://eco-roads.herokuapp.com/images/${car.image}`} alt="Owned Car" />
        ) : (
          <img className={matches ? 'main-img-desktop' : 'main-img'} crossOrigin="anonymous" src="https://eco-roads.herokuapp.com/images/tesla_model_s.png" alt="Owned Car" />
        )
      }
      {!matches ? (
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
            <Tooltip title="Paramètre">
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
            <Tooltip title="Paramètre">
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
