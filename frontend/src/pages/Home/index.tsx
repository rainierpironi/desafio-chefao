import Container from '../../components/Container';
import Apoie from '../../components/Apoie/Apoie';
import Sobre from '../../components/Sobre';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const Home: React.FC = () => {
  return (
    <Container>
        <Header />
        <Sobre />
        <Apoie />
        <Footer />
    </Container>
  );
}

export default Home;