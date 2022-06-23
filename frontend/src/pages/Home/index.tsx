import Container from '../../components/Container';
import Apoie from '../../components/Apoie/Apoie';
import Sobre from '../../components/Sobre';

const Home: React.FC = () => {
  return (
    <Container>
        <Sobre />
        <Apoie />
    </Container>
  );
}

export default Home;