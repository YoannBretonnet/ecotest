// == Style
import './styles.scss';

// == Component
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/HomePage/Main';
import ModalConnection from 'src/components/ModalAuthentification/ModalConnection';
import ModalAccountCreation from 'src/components/ModalAuthentification/ModalAccountCreation';

import Box from '@mui/material/Box';

// == Composant
function HomePage() {
  const reducerRoute = 'auth';
  return (
    <Box
      component="div"
      id="App"
      sx={{
        height: 'fit-content', width: 'fit-content', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', minHeight: '100vh',
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
