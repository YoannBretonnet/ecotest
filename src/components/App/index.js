// == Initialisation
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';
import { ThemeProvider } from '@mui/material';
import theme from 'src/styles/styles';

// == Component
import HomePage from 'src/components/HomePage';
import ProfilePage from 'src/components/ProfilePage';

import {
  getVehiclesData,
  getCategoriesData,
} from 'src/actions/mapSettings';

// == Composant
function App() {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.auth.isConnected);
  useEffect(() => {
    dispatch(getVehiclesData());
    dispatch(getCategoriesData());
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {
          isConnected && (
            <Route path="/profile" element={<ProfilePage />} />
          )
        }
      </Routes>
    </ThemeProvider>
  );
}

// == Export
export default App;
