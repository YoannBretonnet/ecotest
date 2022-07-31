// == Style
import './styles.scss';

// == Component
import Header from 'src/components/Header';
import Map from './Map';
import Sidebar from './Sidebar';
import ModalConnection from 'src/components/ModalAuthentification/ModalConnection';
import ModalAccountCreation from 'src/components/ModalAuthentification/ModalAccountCreation';
import { useSelector } from 'react-redux';

import 'mapbox-gl/dist/mapbox-gl.css';


// == Composant

function MapPage() {
  const reducerRoute = 'auth';
  const isConnected = useSelector((state) => state.auth.isConnected);

  return (
    <>
      <Header />
      <Map />
      {
        !isConnected ? (
      <Sidebar 
        text = "Pour sauvegarder votre trajet, connectez-vous!"
      />
      ) : (
        <Sidebar 
        text = "Sauvegardez ce trajet dans vos favoris"
      />
        )
      }
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
