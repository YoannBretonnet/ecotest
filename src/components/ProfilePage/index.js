// == Import

import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ModalAccountUpdate from 'src/components/ModalAuthentification/ModalAccountUpdate';
import ModalCarSettings from 'src/components/ModalMapSettings/ModalCarSettings';
import ModalLocalisationSettings from 'src/components/ModalMapSettings/ModalLocalisationSettings';
import InterestPointModal from 'src/components/ModalMapSettings/InterestPointModal';
import Footer from 'src/components/Footer';
import Header from './Header';
import Main from './Main';

// == Style
import './styles.scss';

// == Composant
function ProfilePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('tablet'));
  const reducerAuth = 'auth';
  const reducerMap = 'mapSettings';
  const updatePage = true;

  return (
    <Box
      component="div"
      id={matches ? 'App-ProfilePage-desktop' : 'App-ProfilePage'}
      sx={{
        height: 'fit-content', width: 'fit-content', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', minHeight: '100vh',
      }}
    >
      <Header />
      <Main />
      <Footer />
      <ModalAccountUpdate
        reducerRoute={reducerAuth}
      />
      <ModalCarSettings
        updatePage={updatePage}
        reducerRoute={reducerMap}
      />
      <ModalLocalisationSettings
        updatePage={updatePage}
        reducerRoute={reducerMap}
      />
      <InterestPointModal
        updatePage={updatePage}
        reducerRoute={reducerMap}
      />
    </Box>
  );
}

// == Export
export default ProfilePage;
