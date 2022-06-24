import Container from '../../components/Container';
import Apoie from '../../components/Apoie/Apoie';
import Sobre from '../../components/Sobre';
import Destino from '../../components/Destino';

const Home: React.FC = () => {
  return (
    <Container>
        <Sobre />
        <Destino />
        <Apoie />
    </Container>
  );
}

export default Home;