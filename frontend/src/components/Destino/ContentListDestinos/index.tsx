import Container from "../../Container";
import CarrosselCidades from "../CarrosselCidades";
import './styles.css';

const ContentListDestinos: React.FC = () => {
  return (
    <Container>
      <div className="conteudo-estados">
        <div className="conteudo-cidades">
          <h3>Paraíba</h3>
          <CarrosselCidades />
          <h3>Pernambuco</h3>
          <CarrosselCidades />
          <h3>Sergipe</h3>
          <CarrosselCidades />
        </div>
      </div>
    </Container>
  );
}

export default ContentListDestinos;