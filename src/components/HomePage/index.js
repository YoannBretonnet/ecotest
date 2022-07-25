// == Style
import './styles.scss';

// == Component
import Header from 'src/components/Header';
import Main from 'src/components/HomePage/Main';
import ModalConnection from 'src/components/ModalAuthentification/ModalConnection';
import ModalAccountCreation from 'src/components/ModalAuthentification/ModalAccountCreation';

// == Composant
function HomePage() {
  const reducerRoute = 'auth';
  return (
    <>
      <Header />
      <Main />
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
export default HomePage;
