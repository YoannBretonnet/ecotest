// == Style
import './styles.scss';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import {
  BiSearch,
  BiCar,
  BiMap,
  BiBookmark,
} from 'react-icons/bi';

// == Composant
function Header() {
  return (
    <Box component="header" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '2vh' }}>
      <Fab variant="extended" color="primary" aria-label="add" sx={{ margin: 'auto' }}>
        Véhicule | Localisation | Intérets
        <BiSearch size="3.1vh" />
      </Fab>
      <Box component="nav" sx={{ display: 'flex', justifyContent: 'center', marginTop: '1vh' }}>
        <Tooltip title="Choix véhicule">
          <IconButton>
            <BiCar size="4vh" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Choix véhicule">
          <IconButton>
            <BiMap size="4vh" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Choix véhicule">
          <IconButton>
            <BiBookmark size="4vh" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

// == Export
export default Header;
