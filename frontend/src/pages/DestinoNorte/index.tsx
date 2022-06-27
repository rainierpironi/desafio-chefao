import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentListDestinos from '../../components/Destino/ContentListDestinos';

const DestinoNorte: React.FC = () => {
  return (
    <Container>
        <Header />
        <div className='banner-destinos'>
            <div className="frase-destinos">
                <h1>Destinos do Norte</h1>
                <h2>Guia de destinos do Brasil</h2>
            </div>
        </div>
        <ContentListDestinos />
        <Footer />
    </Container>
  );
}

export default DestinoNorte;