import Container from '../../components/Container';
import Apoie from '../../components/Apoie/Apoie';
import Sobre from '../../components/Sobre';
import Destinos from '../../components/Destino/HomeDestinos';
import Dicas from '../../components/Dicas/Dicas';
import Conecte from '../../components/Conecte/Conecte';

const Home: React.FC = () => {
  return (
    <Container>
        <Sobre />
        <Destinos />
        <Dicas/>
        <Conecte/>
        <Apoie />
    </Container>
  );
}

export default Home;