import Container from '../../components/Container';
import Apoie from '../../components/Apoie/Apoie';
import Sobre from '../../components/Sobre';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Destinos from '../../components/HomeDestinos';
import Dicas from '../../components/Dicas/Dicas';
import Conecte from '../../components/Conecte/Conecte';
import FormContato from '../../components/Contato';
import BannerHome from '../../components/BannerHome'
const Home: React.FC = () => {
  return (
    <Container>
         <Header />
        <BannerHome />
        <Sobre />
        <Destinos />
        <Dicas/>
        <Conecte/>
        <Apoie />
        <FormContato/>
        <Footer />
    </Container>
  );
}

export default Home;