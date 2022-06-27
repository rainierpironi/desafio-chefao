import Container from '../../components/Container';
import Apoie from '../../components/Apoie/Apoie';
import Sobre from '../../components/Sobre';
<<<<<<< HEAD
import Header from '../../components/Header';
import Footer from '../../components/Footer';
=======
import Destinos from '../../components/Destino/HomeDestinos';
import Dicas from '../../components/Dicas/Dicas';
import Conecte from '../../components/Conecte/Conecte';
import Contato from '../../components/Contato';

>>>>>>> 8fb398d3354217c7fe18107fc12b6dd30265fa1d
const Home: React.FC = () => {
  return (
    <Container>
        <Header />
        <Sobre />
        <Destinos />
        <Dicas/>
        <Conecte/>
        <Apoie />
<<<<<<< HEAD
        <Footer />
=======
        <Contato/>
>>>>>>> 8fb398d3354217c7fe18107fc12b6dd30265fa1d
    </Container>
  );
}

export default Home;