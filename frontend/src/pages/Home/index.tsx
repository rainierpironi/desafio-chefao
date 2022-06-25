import Container from '../../components/Container';
import Apoie from '../../components/Apoie/Apoie';
import Sobre from '../../components/Sobre';
import Destino from '../../components/Destino';
import Dicas from '../../components/Dicas/Dicas';
import Conecte from '../../components/Conecte/Conecte';
import Contato from '../../components/Contato';

const Home: React.FC = () => {
  return (
    <Container>
        <Sobre />
        <Destino />
        <Dicas/>
        <Conecte/>
        <Apoie />
        <Contato/>
    </Container>
  );
}

export default Home;