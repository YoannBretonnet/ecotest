// == Initialisation
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';

// == Component
import HomePage from 'src/components/HomePage';
import MapPage from 'src/components/MapPage';

// == Composant
function App() {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.auth.isConnected);
  useEffect(() => {
    dispatch(getVehiclesData());
    dispatch(getCategoriesData());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {
        isConnected && (
          <Route path="/profile" element={<ProfilePage />} />
        )
      }
    </Routes>
  );
}

// == Export
export default App;
