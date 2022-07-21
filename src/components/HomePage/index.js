// == Style
import './styles.scss';

// == Component
import Header from 'src/components/Header';
import Main from 'src/components/HomePage/Main';
import ModalConnection from 'src/components/ModalAuthentification/ModalConnection';

// == Composant
function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <ModalConnection />
    </>
  );
}

// == Export
export default HomePage;
