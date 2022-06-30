import { ContaineirVideo, ContainerSobre, ContainerTextoSobre, ConteudoSobre, Gradiente, ImagemChevron, Seta, SubtituloSobre, TextoSobre, Titulos, TituloSobre, VideoSobre } from './styled';
import Chevron from '../../assets/Images/chevron-down.svg';

const Sobre: React.FC = () => {
    return (
            <ContainerSobre id='sobre'>
                <Titulos>
                    <TituloSobre>Sobre</TituloSobre>
                    <SubtituloSobre>Quem somos</SubtituloSobre>
                </Titulos>
                <ConteudoSobre>
                    <ContaineirVideo>
                        <VideoSobre width="445" height="300" src="https://www.youtube.com/embed/TckrIc-4CsU" title="#24 - Mulheres que Viajam Sozinhas - Com Carolina Viana e Kamy Queiroz - Podcast Saída de Emergência" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></VideoSobre>
                    </ContaineirVideo>
                    <ContainerTextoSobre>
                        <TextoSobre>Somos uma plataforma digital focada em mulheres viajantes solo.<br /><br />Oferecemos grupos para conexão entre mulheres em viagem solo no território brasileiro com interesses em destinos comuns. Possibilitando troca de informações para suporte, referências e orientações para as viagens.<br /><br />Dessa forma, contribuimos para democratizar o acesso sobre quaisquer destinos de interesse no Brasil, além de oferecer dicas sobre segurança e suporte para destinos de interesse.</TextoSobre>
                    </ContainerTextoSobre>
                </ConteudoSobre>

                <Gradiente>
                    <Seta href='#destinos'>
                        <ImagemChevron src={Chevron} alt="seta" />
                    </Seta>
                </Gradiente>
            </ContainerSobre>
    )
}

export default Sobre;

