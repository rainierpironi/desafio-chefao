import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BannerDestinos from '../../components/Destino/BannerDestinos';
import ContentListDestinos from '../../components/Destino/ContentListDestinos';

const Destinos: React.FC = () => {
  return (
    <Container>
        <Header />
        <BannerDestinos />
        <ContentListDestinos />
        <Footer />
    </Container>
  );
}

export default Destinos;