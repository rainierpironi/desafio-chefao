import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BannerDestinos, BotaoNext, BotaoPrev, Carousel, ContainerCidades, ConteudoEstados, EstadosTitulo, FraseDestinos, FraseDestinosSubtitulo, FraseDestinosTitulo, ImagemCidade, ImagemNext, ImagemNextSecond, ImagemPrev, ImagemPrevSecond, LinkCidade } from './styled';
import ImagemCaldas from '../../assets/Images/imagem-caldas.png';
import ImagemPirenopolis from '../../assets/Images/imagem-pirenopolis.png';
import ImagemChapadaVe from '../../assets/Images/imagem-chapada-ve.png';
import ImagemCampo from '../../assets/Images/imagem-campo.png';
import ImagemBonito from '../../assets/Images/imagem-bonito.png';
import ImagemBodoquena from '../../assets/Images/imagem-bodoquena.png';
import SetaVoltar from '../../assets/Images/seta-voltar.png';
import { useRef } from 'react';
import botaoPrev from '../../assets/Images/botao-prev.png';
import botaoNext from '../../assets/Images/botao-next.png';
import { Link } from 'react-router-dom';
import { VoltarPagina } from '../DestinoNordeste/styled';

const DestinoCentroOeste: React.FC = () => {

  const firstCarousel: any = useRef(null);
  const secondCarousel: any = useRef(null);

  const handleLeftClickFirst = (e: any) => {
    e.preventDefault(e);
    firstCarousel.current.scrollLeft -= 500;
  }

  const handleRightClickFirst = (e: any) => {
    e.preventDefault(e);
    firstCarousel.current.scrollLeft += 500;
  };

  const handleLeftClickSecond = (e: any) => {
    e.preventDefault(e);
    secondCarousel.current.scrollLeft -= 500;
  }

  const handleRightClickSecond = (e: any) => {
    e.preventDefault(e);
    secondCarousel.current.scrollLeft += 500;
  };

  return (
    <Container>
      <Header />
      <BannerDestinos>
        <Link to={'/'}>
          <VoltarPagina src={SetaVoltar} alt="seta-voltar" />
        </Link>
        <FraseDestinos>
          <FraseDestinosTitulo>Destinos do Centro-Oeste</FraseDestinosTitulo>
          <FraseDestinosSubtitulo>Guia de destinos do Brasil</FraseDestinosSubtitulo>
        </FraseDestinos>
      </BannerDestinos>
      <ConteudoEstados id='conteudo-estados'>
        <div>
          <EstadosTitulo>Goiás</ EstadosTitulo>
          <ContainerCidades>
            <div>
              <BotaoPrev onClick={handleLeftClickFirst}>
                <ImagemPrev src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={firstCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'/destinos/centro-oeste/goias/caldas-novas/13'}>
                  <ImagemCidade src={ImagemCaldas} alt="" />
                  Caldas Novas
                </LinkCidade>
                <LinkCidade to={'/destinos/centro-oeste/goias/pirenopolis/14'}>
                  <ImagemCidade src={ImagemPirenopolis} alt="" />
                  Pirenópolis
                </LinkCidade>
                <LinkCidade to={'/destinos/centro-oeste/goias/chapada-dos-veadeiros/15'}>
                  <ImagemCidade src={ImagemChapadaVe} alt="" />
                  Chapada dos Veadeiros
                </LinkCidade>
              </div>
            </Carousel>
            <div>
              <BotaoNext onClick={handleRightClickFirst}>
                <ImagemNext src={botaoNext} alt="botao-next" />
              </BotaoNext>
            </div>
          </ContainerCidades>
          <EstadosTitulo>Mato Grosso do Sul</EstadosTitulo>
          <ContainerCidades>
            <div className='botao-prev'>
              <BotaoPrev onClick={handleLeftClickSecond}>
                <ImagemPrevSecond src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={secondCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'/destinos/centro-oeste/mato-grosso-do-sul/campo-grande/16'}>
                  <ImagemCidade src={ImagemCampo} alt="" />
                  Campo Grande
                </LinkCidade>
                <LinkCidade to={'/destinos/centro-oeste/mato-grosso-do-sul/bonito/17'}>
                  <ImagemCidade src={ImagemBonito} alt="" />
                  Bonito
                </LinkCidade>
                <LinkCidade to={'/destinos/centro-oeste/mato-grosso-do-sul/bodoquena/18'}>
                  <ImagemCidade src={ImagemBodoquena} alt="" />
                  Bodoquena
                </LinkCidade>
              </div>
            </Carousel>
            <div>
              <BotaoNext onClick={handleRightClickSecond}>
                <ImagemNextSecond src={botaoNext} alt="botao-next" />
              </BotaoNext>
            </div>
          </ContainerCidades>
        </div>
      </ConteudoEstados>
      <Footer />
    </Container>
  );
}

export default DestinoCentroOeste;