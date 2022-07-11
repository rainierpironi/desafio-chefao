import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BannerDestinos, BotaoNext, BotaoPrev, Carousel, ContainerCidades, ConteudoEstados, EstadosTitulo, FraseDestinos, FraseDestinosSubtitulo, FraseDestinosTitulo, ImagemCidade, ImagemNext, ImagemNextSecond, ImagemPrev, ImagemPrevSecond, LinkCidade } from './styled';
import ImagemFlorianopolis from '../../assets/Images/imagem-florianopolis.png';
import ImagemBlumenau from '../../assets/Images/imagem-blumenau.png';
import ImagemJoinville from '../../assets/Images/imagem-joinville.png';
import ImagemGramado from '../../assets/Images/imagem-gramado.png';
import ImagemCanela from '../../assets/Images/imagem-canela.png';
import ImagemPorto from '../../assets/Images/imagem-porto-alegre.png';
import SetaVoltar from '../../assets/Images/seta-voltar.png';
import { useRef } from 'react';
import botaoPrev from '../../assets/Images/botao-prev.png';
import botaoNext from '../../assets/Images/botao-next.png';
import { Link } from 'react-router-dom';
import { VoltarPagina } from '../DestinoNordeste/styled';

const DestinoSul: React.FC = () => {

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
          <FraseDestinosTitulo>Destinos do Sul</FraseDestinosTitulo>
          <FraseDestinosSubtitulo>Guia de destinos do Brasil</FraseDestinosSubtitulo>
        </FraseDestinos>
      </BannerDestinos>
      <ConteudoEstados id='conteudo-estados'>
        <div>
          <EstadosTitulo>Santa Catarina</ EstadosTitulo>
          <ContainerCidades>
            <div>
              <BotaoPrev onClick={handleLeftClickFirst}>
                <ImagemPrev src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={firstCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'/destinos/sul/santa-catarina/florianopolis/25'}>
                  <ImagemCidade src={ImagemFlorianopolis} alt="Florianópolis" />
                  Florianópolis
                </LinkCidade>
                <LinkCidade to={'/destinos/sul/santa-catarina/blumenau/26'}>
                  <ImagemCidade src={ImagemBlumenau} alt="Blumenau" />
                  Blumenau
                </LinkCidade>
                <LinkCidade to={'/destinos/sul/santa-catarina/joinville/27'}>
                  <ImagemCidade src={ImagemJoinville} alt="Joinville" />
                  Joinville
                </LinkCidade>
              </div>
            </Carousel>
            <div>
              <BotaoNext onClick={handleRightClickFirst}>
                <ImagemNext src={botaoNext} alt="botao-next" />
              </BotaoNext>
            </div>
          </ContainerCidades>
          <EstadosTitulo>Rio Grande do Sul</EstadosTitulo>
          <ContainerCidades>
            <div className='botao-prev'>
              <BotaoPrev onClick={handleLeftClickSecond}>
                <ImagemPrevSecond src={botaoPrev} alt="botao-prev" />
              </BotaoPrev>
            </div>
            <Carousel ref={secondCarousel}>
              <div className='item d-flex'>
                <LinkCidade to={'/destinos/sul/rio-grande-do-sul/gramado/28'}>
                  <ImagemCidade src={ImagemGramado} alt="Gramado" />
                  Gramado
                </LinkCidade>
                <LinkCidade to={'/destinos/sul/rio-grande-do-sul/canela/29'}>
                  <ImagemCidade src={ImagemCanela} alt="Canela" />
                  Canela
                </LinkCidade>
                <LinkCidade to={'/destinos/sul/rio-grande-do-sul/portoalegre/30'}>
                  <ImagemCidade src={ImagemPorto} alt="Porto Alegre" />
                  Porto Alegre
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

export default DestinoSul;