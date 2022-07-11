import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BannerDestinos, BotaoNext, BotaoPrev, Carousel, ContainerCidades, ConteudoEstados, EstadosTitulo, FraseDestinos, FraseDestinosSubtitulo, FraseDestinosTitulo, ImagemCidade, ImagemNext, ImagemNextSecond, ImagemPrev, ImagemPrevSecond, LinkCidade, VoltarPagina } from './styled';
import ImagemSalvador from '../../assets/Images/imagem-salvador.png';
import ImagemTrancoso from '../../assets/Images/imagem-trancoso.png';
import ImagemChapada from '../../assets/Images/imagem-chapada.png';
import ImagemOlinda from '../../assets/Images/imagem-olinda.png';
import ImagemRecife from '../../assets/Images/imagem-recife.png';
import ImagemPorto from '../../assets/Images/imagem-porto.png';
import SetaVoltar from '../../assets/Images/seta-voltar.png';
import { useRef } from 'react';
import botaoPrev from '../../assets/Images/botao-prev.png';
import botaoNext from '../../assets/Images/botao-next.png';
import { Link } from 'react-router-dom';

const DestinoNordeste: React.FC = () => {

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
      <Header/>
      <BannerDestinos>
        <Link to={'/'}>
          <VoltarPagina src={SetaVoltar} alt="seta-voltar" />
        </Link>
        <FraseDestinos>
          <FraseDestinosTitulo>Destinos do Nordeste</FraseDestinosTitulo>
          <FraseDestinosSubtitulo>Guia de destinos do Brasil</FraseDestinosSubtitulo>
        </FraseDestinos>
      </BannerDestinos>
      <ConteudoEstados id='conteudo-estados'>
        <div>
          <EstadosTitulo>Bahia</ EstadosTitulo>
          <ContainerCidades>
            <div>
              <BotaoPrev onClick={handleLeftClickFirst}>
                <ImagemPrev src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={firstCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'/destinos/nordeste/bahia/salvador/7'}>
                  <ImagemCidade src={ImagemSalvador} alt="" />
                  Salvador
                </LinkCidade>
                <LinkCidade to={'/destinos/nordeste/bahia/trancoso/8'}>
                  <ImagemCidade src={ImagemTrancoso} alt="" />
                  Trancoso
                </LinkCidade>
                <LinkCidade to={'/destinos/nordeste/bahia/chapada-diamantina/9'}>
                  <ImagemCidade src={ImagemChapada} alt="" />
                  Chapada Diamantina
                </LinkCidade>
              </div>
            </Carousel>
            <div>
              <BotaoNext onClick={handleRightClickFirst}>
                <ImagemNext src={botaoNext} alt="botao-next" />
              </BotaoNext>
            </div>
          </ContainerCidades>
          <EstadosTitulo>Pernambuco</EstadosTitulo>
          <ContainerCidades>
            <div className='botao-prev'>
              <BotaoPrev onClick={handleLeftClickSecond}>
                <ImagemPrevSecond src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={secondCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'/destinos/nordeste/pernambuco/olinda/10'}>
                  <ImagemCidade src={ImagemOlinda} alt="" />
                  Olinda
                </LinkCidade>
                <LinkCidade to={'/destinos/nordeste/pernambuco/recife/11'}>
                  <ImagemCidade src={ImagemRecife} alt="" />
                  Recife
                </LinkCidade>
                <LinkCidade to={'/destinos/nordeste/pernambuco/porto-de-galinhas/12'}>
                  <ImagemCidade src={ImagemPorto} alt="" />
                  Porto de Galinhas
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

export default DestinoNordeste;