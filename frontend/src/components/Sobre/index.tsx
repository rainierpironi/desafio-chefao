import { Fragment } from 'react';
import { ContaineirVideo, ContainerSobre, ContainerTextoSobre, ConteudoSobre, TextoSobre, TituloSobre, VideoSobre } from './styled';

const Sobre: React.FC = () => {
    return (
        <Fragment>
            <ContainerSobre>
                    <TituloSobre>Sobre</TituloSobre>
                <ConteudoSobre>
                    <ContaineirVideo>
                        <VideoSobre width="445" height="450" src="https://www.youtube.com/embed/TckrIc-4CsU" title="#24 - Mulheres que Viajam Sozinhas - Com Carolina Viana e Kamy Queiroz - Podcast Saída de Emergência" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></VideoSobre>
                    </ContaineirVideo>
                    <ContainerTextoSobre>
                        <TextoSobre>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem illo cumque cum incidunt aliquam, nisi quisquam magni. Rem deserunt, accusamus explicabo voluptas dolore aliquam ad iusto quam aperiam eos?
                        </TextoSobre>
                    </ContainerTextoSobre>
                </ConteudoSobre>
            </ContainerSobre>
        </Fragment>
    )
}

export default Sobre;

