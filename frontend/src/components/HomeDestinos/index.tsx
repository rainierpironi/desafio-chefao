import React, { Fragment } from 'react';
import ImagemNorte from '../../assets/Images/norte.png';
import ImagemNordeste from '../../assets/Images/nordeste.png';
import ImagemCentroOeste from '../../assets/Images/centro-oeste.png';
import ImagemSudeste from '../../assets/Images/sudeste.png';
import ImagemSul from '../../assets/Images/sul.png';
import Chevron from '../../assets/Images/chevron-down.svg';
import { ContainerDestinos, ConteudoDestinos, ImagemDestino, LinkDestino, SubtituloDestinos, TituloDestinos, ContainerTitulos } from './styled';

const Destinos: React.FC = () => {
    return (
            <ContainerDestinos id='destinos'>

                <ContainerTitulos>
                    <TituloDestinos>Destinos</TituloDestinos>
                    <SubtituloDestinos>Guia de destinos do Brasil</SubtituloDestinos>
                </ContainerTitulos>

                <ConteudoDestinos>
                    <LinkDestino to='/destinos/norte'>
                        <ImagemDestino src={ImagemNorte} alt="paisagem-norte" />
                    </LinkDestino>
                    <LinkDestino to='/destinos/nordeste'>
                        <ImagemDestino src={ImagemNordeste} alt="paisagem-nordeste" />
                    </LinkDestino>
                    <LinkDestino to='/destinos/centro-oeste'>
                        <ImagemDestino  src={ImagemCentroOeste} alt="paisagem-centrooeste" />
                    </LinkDestino>
                    <LinkDestino to='/destinos/sudeste'>
                        <ImagemDestino src={ImagemSudeste} alt="paisagem-sudeste" />
                    </LinkDestino>
                    <LinkDestino to='/destinos/sul'>
                        <ImagemDestino  src={ImagemSul} alt="paisagem-sul" />
                    </LinkDestino>
                </ConteudoDestinos>
            </ContainerDestinos>
    );
}

export default Destinos;