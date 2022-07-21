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
  const args = {
    size: '4vh',
  };
  return (
    <Box component="header" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '2vh' }}>
      <Fab variant="extended" aria-label="add" sx={{ margin: 'auto', gap: '1vh', fontWeight: 'bold' }}>
        Véhicule | Localisation | Intérets
        <BiSearch size="3.1vh" />
      </Fab>
      <Box component="nav" sx={{ display: 'flex', justifyContent: 'center', marginTop: '1vh' }}>
        <Tooltip title="Choix véhicule">
          <IconButton>
            <BiCar size={args.size} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Choix véhicule">
          <IconButton>
            <BiMap size={args.size} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Choix véhicule">
          <IconButton>
            <BiBookmark size={args.size} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

// == Export
export default Header;
