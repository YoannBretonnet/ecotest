// == Style
import './styles.scss';

// == Component
import Header from 'src/components/Header';
import MainPicture from 'src/components/HomePage/MainPicture';

// == Composant
function HomePage() {
  return (
    <div>
      <Header />
      <MainPicture />
    </div>
  );
}

// == Export
export default HomePage;
