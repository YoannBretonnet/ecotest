// == Style
import './styles.scss';

// == Component
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/HomePage/Main';
import ModalConnection from 'src/components/ModalAuthentification/ModalConnection';
import ModalAccountCreation from 'src/components/ModalAuthentification/ModalAccountCreation';

import {
  Box,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// == Composant
function HomePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const reducerRoute = 'auth';
  return (
    <Box
      component="div"
      id={matches ? 'App' : 'App-Desktop'}
      sx={{
        height: 'fit-content', width: '100%', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', minHeight: '100vh',
      }}
    >
      <Header />
      <Main />
      <Footer />
      <ModalConnection
        reducerRoute={reducerRoute}
      />
      <ModalAccountCreation
        reducerRoute={reducerRoute}
      />
    </Box>
  );
}

// == Export
export default HomePage;
