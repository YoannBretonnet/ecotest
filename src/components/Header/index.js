// == Style
import './styles.scss';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ModalCarSettings from 'src/components/ModalMapSettings/ModalCarSettings';

import { useSelector, useDispatch } from 'react-redux';
import { openCloseCarModal } from 'src/actions/mapSettings';

import {
  BiSearch,
  BiCar,
  BiMap,
  BiBookmark,
} from 'react-icons/bi';
import styles from './IconSlider.module.scss';

// == Composant
function Header() {
  const dispatch = useDispatch();
  const { isOpen: isCarOpen } = useSelector((state) => state.mapSettings.carSettingsModal);
  const args = {
    size: '4vh',
  };
  const reducerRoute = 'mapSettings';
  return (
    <>
      <Box
        component="header"
        sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '2vh',
        }}
      >
        <Fab variant="extended" aria-label="add" sx={{ margin: 'auto', gap: '1vh', fontWeight: 'bold' }}>
          Véhicule | Localisation | Intérets
          <BiSearch size="3.1vh" />
        </Fab>
        <Box component="nav" sx={{ display: 'flex', justifyContent: 'center', marginTop: '1vh' }}>
          <Tooltip title="Choix véhicule">
            <IconButton
              className={isCarOpen ? styles.icon : ''}
              onClick={(() => dispatch(openCloseCarModal()))}
            >
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
      <ModalCarSettings
        reducerRoute={reducerRoute}
      />
    </>
  );
}

// == Export
export default Header;
