import { ContaineirVideo, ContainerSobre, ContainerTextoSobre, ConteudoSobre, SubtituloSobre, TextoSobre, Titulos, TituloSobre, VideoSobre } from './styled';

const Sobre: React.FC = () => {
    return (
            <ContainerSobre id='sobre'>
                <Titulos>
                    <TituloSobre>Sobre</TituloSobre>
                    <SubtituloSobre>Quem somos</SubtituloSobre>
                </Titulos>
                <ConteudoSobre>
                    <ContaineirVideo>
                        <VideoSobre width="444" height="264" src="https://www.youtube.com/embed/-9kTQVmdAes" title="Plataforma LAVAIELA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></VideoSobre>
                    </ContaineirVideo>
                    <ContainerTextoSobre>
                        <TextoSobre>Somos uma plataforma digital focada em mulheres viajantes solo.<br /><br />Oferecemos grupos para conexão entre mulheres em viagem solo no território brasileiro com interesses em destinos comuns. Possibilitando troca de informações para suporte, referências e orientações para as viagens.<br /><br />Dessa forma, contribuimos para democratizar o acesso sobre quaisquer destinos de interesse no Brasil, além de oferecer dicas sobre segurança e suporte para destinos de interesse.</TextoSobre>
                    </ContainerTextoSobre>
                </ConteudoSobre>
            </ContainerSobre>
    )
}

export default Sobre;

