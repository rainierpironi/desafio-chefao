import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Chevron from '../../assets/Images/chevron-down.svg';
import { BannerDestinos, BotaoNext, BotaoPrev, Carousel, ContainerCidades, ConteudoEstados, EstadosTitulo, FraseDestinos, FraseDestinosSubtitulo, FraseDestinosTitulo, GradienteBrancoDestino, ImagemChevronDestino, ImagemCidade, ImagemNext, ImagemNextSecond, ImagemPrev, ImagemPrevSecond, LinkCidade, SetaDestino } from './styled';
import ImagemSalvador from '../../assets/Images/imagem-salvador.png';
import ImagemTrancoso from '../../assets/Images/imagem-trancoso.png';
import ImagemChapada from '../../assets/Images/imagem-chapada.png';
import ImagemOlinda from '../../assets/Images/imagem-olinda.png';
import ImagemRecife from '../../assets/Images/imagem-recife.png';
import ImagemPorto from '../../assets/Images/imagem-porto.png';
import { useRef } from 'react';
import botaoPrev from '../../assets/Images/botao-prev.png';
import botaoNext from '../../assets/Images/botao-next.png';

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
      <Header/>
      <BannerDestinos>
        <FraseDestinos>
          <FraseDestinosTitulo>Destinos do Norte</FraseDestinosTitulo>
          <FraseDestinosSubtitulo>Guia de destinos do Brasil</FraseDestinosSubtitulo>
        </FraseDestinos>
      </BannerDestinos>
      <GradienteBrancoDestino>
        <SetaDestino href='#conteudo-estados'>
          <ImagemChevronDestino src={Chevron} alt="seta" />
        </SetaDestino>
      </GradienteBrancoDestino>
      <ConteudoEstados id='conteudo-estados'>
        <div>
          <EstadosTitulo>Amazonas</ EstadosTitulo>
          <ContainerCidades>
            <div>
              <BotaoPrev onClick={handleLeftClickFirst}>
                <ImagemPrev src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={firstCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemSalvador} alt="" />
                  Manaus
                </LinkCidade>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemTrancoso} alt="" />
                  Parintins
                </LinkCidade>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemChapada} alt="" />
                  Presidente Figueiredo
                </LinkCidade>
              </div>
            </Carousel>
            <div>
              <BotaoNext onClick={handleRightClickFirst}>
                <ImagemNext src={botaoNext} alt="botao-next" />
              </BotaoNext>
            </div>
          </ContainerCidades>
          <EstadosTitulo>Pará</EstadosTitulo>
          <ContainerCidades>
            <div className='botao-prev'>
              <BotaoPrev onClick={handleLeftClickSecond}>
                <ImagemPrevSecond src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={secondCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemOlinda} alt="" />
                  Belém
                </LinkCidade>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemRecife} alt="" />
                  Alter do Chão
                </LinkCidade>
                <LinkCidade to={'#'}>
                  <ImagemCidade src={ImagemPorto} alt="" />
                  Marabá
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