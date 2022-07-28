// == Import
import { useSelector, useDispatch } from 'react-redux';
// import {  } from 'src/store/action';

import { Box } from '@mui/material';

import Header from './Header';
import Main from './Main';

// == Style
import './styles.scss';

// == Composant
function ProfilePage() {
  const dispatch = useDispatch();
  // const  = useSelector((state) => state.);

  return (
    <Box
      component="div"
      id="App-ProfilePage"
      sx={{
        height: 'fit-content', width: 'fit-content', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', minHeight: '100vh',
      }}
    >
      <Header />
      <Main />
    </Box>
  );
}

// == Export
export default ProfilePage;
