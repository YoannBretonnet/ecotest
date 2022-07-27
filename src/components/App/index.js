// == Initialisation
import { Routes, Route } from 'react-router-dom';

// == Style
import './styles.scss';

// == Component
import HomePage from 'src/components/HomePage';

// == Composant
function App() {
  // const [cookies, setCookie, removeCookie] = useCookies();
  // useEffect(() => {
  //   setCookie('coucou', 'coucou2', {
  //     maxAge: 100,
  //   });
  // }, []);
  // console.log(cookies);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

// == Export
export default App;
