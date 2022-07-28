// == Import
import { useSelector, useDispatch } from 'react-redux';
// import {  } from 'src/store/action';

// == Style
import {
  Box, Tooltip, IconButton, Chip, Button,
} from '@mui/material';
import './styles.scss';

import {
  BiEdit,
} from 'react-icons/bi';

// == Composant
function Main() {
  const dispatch = useDispatch();
  const { carOwned, localisation, categories } = useSelector((state) => state.profile.profile);

  return (
    <Box
      id="main-ProfilePage"
      component="main"
      sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '26vh',
      }}
    >
      <Box
        component="header"
        sx={{
          display: 'flex', flexDirection: 'row', margin: 'auto', alignItems: 'center',
        }}
      >
        <h2 className="main-message">
          Bienvenue Gaetan
        </h2>
        <Tooltip title="Paramètre de sécurité">
          <IconButton
            sx={{ position: 'relative', bottom: '-1vh' }}
          >
            <BiEdit size="3vh" />
          </IconButton>
        </Tooltip>
      </Box>
      <article className="user-preferences-container">
        <article className="user-preferences-container-vehiclesData user-preferences-container-element">
          <p>
            Type de véhicule:
          </p>
          <Chip label={carOwned.brand.name} />
          <Chip label={carOwned.car.model} />
        </article>
        <article className="user-preferences-container-departureData user-preferences-container-element">
          <p>
            Point de départ:
          </p>
          <Chip label={`${localisation.street_number} ${localisation.adress}, ${localisation.city}`} />
        </article>
        <article className="user-preferences-container-departureData user-preferences-container-element">
          <p>
            Centres d'intérêts:
          </p>
          {
            categories.map((categorie) => <Chip key={categorie.id} label={categorie.name} />)
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
          >
            Modifier mes informations de trajet
          </Button>
        </Tooltip>
      </article>
    </Box>
  );
}

// == Export
export default Main;
