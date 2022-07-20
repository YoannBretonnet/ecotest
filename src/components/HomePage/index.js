// == Style
import './styles.scss';

// == Component
import Header from 'src/components/Header';
import CarouselComponent from 'src/components/Carousel';

// == Composant
function HomePage() {
  return (
    <>
      <Header />
      <CarouselComponent />
    </>
  );
}

// == Export
export default HomePage;
