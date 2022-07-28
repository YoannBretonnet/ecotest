// == Initialisation
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';

// == Component
import HomePage from 'src/components/HomePage';
import ProfilePage from 'src/components/ProfilePage';

// == Composant
function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {
        !isConnected && (
          <Route path="/profile" element={<ProfilePage />} />
        )
      }
    </Routes>
  );
}

// == Export
export default App;
