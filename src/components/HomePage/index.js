// == Style
import './styles.scss';

// == Component
import Header from 'src/components/Header';
import CarouselComponent from 'src/components/Carousel';
import MainPicture from 'src/components/HomePage/MainPicture';

// == Composant
function HomePage() {
  return (
    <>
      <Header />
      <MainPicture />
      <CarouselComponent />
    </>
  );
}

// == Export
export default HomePage;
