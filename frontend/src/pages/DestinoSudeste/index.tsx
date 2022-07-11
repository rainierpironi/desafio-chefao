import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BannerDestinos, BotaoNext, BotaoPrev, Carousel, ContainerCidades, ConteudoEstados, EstadosTitulo, FraseDestinos, FraseDestinosSubtitulo, FraseDestinosTitulo, ImagemCidade, ImagemNext, ImagemNextSecond, ImagemPrev, ImagemPrevSecond, LinkCidade } from './styled';
import ImagemSaoPaulo from '../../assets/Images/imagem-sao-paulo.png';
import ImagemIlhabela from '../../assets/Images/imagem-ilhabela.png';
import ImagemCampos from '../../assets/Images/imagem-campos.png';
import ImagemRio from '../../assets/Images/imagem-rio.png';
import ImagemAngra from '../../assets/Images/imagem-angra.png';
import ImagemPetropolis from '../../assets/Images/imagem-petropolis.png';
import SetaVoltar from '../../assets/Images/seta-voltar.png';
import { useRef } from 'react';
import botaoPrev from '../../assets/Images/botao-prev.png';
import botaoNext from '../../assets/Images/botao-next.png';
import { Link } from 'react-router-dom';
import { VoltarPagina } from '../DestinoNordeste/styled';

const DestinoSudeste: React.FC = () => {

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
          <FraseDestinosTitulo>Destinos do Sudeste</FraseDestinosTitulo>
          <FraseDestinosSubtitulo>Guia de destinos do Brasil</FraseDestinosSubtitulo>
        </FraseDestinos>
      </BannerDestinos>
      <ConteudoEstados id='conteudo-estados'>
        <div>
          <EstadosTitulo>São Paulo</ EstadosTitulo>
          <ContainerCidades>
            <div>
              <BotaoPrev onClick={handleLeftClickFirst}>
                <ImagemPrev src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={firstCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'/destinos/sudeste/sao-paulo/sao-paulo/19'}>
                  <ImagemCidade src={ImagemSaoPaulo} alt="" />
                  São Paulo
                </LinkCidade>
                <LinkCidade to={'/destinos/sudeste/sao-paulo/ilhabela/20'}>
                  <ImagemCidade src={ImagemIlhabela} alt="" />
                  Ilhabela
                </LinkCidade>
                <LinkCidade to={'/destinos/sudeste/sao-paulo/campos-do-jordao/21'}>
                  <ImagemCidade src={ImagemCampos} alt="" />
                  Campos do Jordão
                </LinkCidade>
              </div>
            </Carousel>
            <div>
              <BotaoNext onClick={handleRightClickFirst}>
                <ImagemNext src={botaoNext} alt="botao-next" />
              </BotaoNext>
            </div>
          </ContainerCidades>
          <EstadosTitulo>Rio de Janeiro</EstadosTitulo>
          <ContainerCidades>
            <div className='botao-prev'>
              <BotaoPrev onClick={handleLeftClickSecond}>
                <ImagemPrevSecond src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={secondCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'/destinos/sudeste/rio-de-janeiro/rio-de-janeiro/22'}>
                  <ImagemCidade src={ImagemRio} alt="" />
                  Rio de Janeiro
                </LinkCidade>
                <LinkCidade to={'/destinos/sudeste/rio-de-janeiro/angra-dos-reis/23'}>
                  <ImagemCidade src={ImagemAngra} alt="" />
                  Angra dos Reis
                </LinkCidade>
                <LinkCidade to={'/destinos/sudeste/rio-de-janeiro/petropolis/24'}>
                  <ImagemCidade src={ImagemPetropolis} alt="" />
                  Petrópolis
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

export default DestinoSudeste;