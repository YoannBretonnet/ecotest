// == Style
import './styles.scss';


// == Component
import Header from 'src/components/Header';
import Main from 'src/components/MapPage/Main';
import Footer from 'src/components/Footer';
import ModalConnection from 'src/components/ModalAuthentification/ModalConnection';
import ModalAccountCreation from 'src/components/ModalAuthentification/ModalAccountCreation';

import 'mapbox-gl/dist/mapbox-gl.css';



// == Composant

function MapPage() {
  const reducerRoute = 'auth';

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ModalConnection
        reducerRoute={reducerRoute}
      />
      <ModalAccountCreation
        reducerRoute={reducerRoute}
      />
    </>
  );
}

// == Export
export default MapPage;
