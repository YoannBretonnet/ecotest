// == Initialisation
import { Routes, Route } from 'react-router-dom';

// == Style
import './styles.scss';

// == Component
import HomePage from 'src/components/HomePage';

// == Composant
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

// == Export
export default App;
