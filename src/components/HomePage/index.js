// == Style
import './styles.scss';

// == Component
import Header from 'src/components/Header';
import Main from 'src/components/HomePage/Main';
import ModalConnection from 'src/components/ModalAuthentification/ModalConnection';
import ModalAccountCreation from 'src/components/ModalAuthentification/ModalAccountCreation';

// == Composant
function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <ModalConnection />
      <ModalAccountCreation />
    </>
  );
}

// == Export
export default HomePage;
