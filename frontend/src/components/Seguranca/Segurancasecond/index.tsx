import React from 'react';
import "./styles.css"
import FaixaSeg from "../../../assets/Images/segfaixa.png"
import { Accordion } from 'react-bootstrap';

// import { Container } from './styles';

const SegurancaSecond: React.FC = () => {
    return (
        <div className='containerSegSecond'>
            <div>
                <img id="faixa" src={FaixaSeg} alt="Faixa banner" />
            </div>
            <div className='tituloSegSecond'>
                <p>Precauções</p>
            </div>
            <div className='dropSegSecond'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Cuidados essenciais</Accordion.Header>
                        <Accordion.Body>
                           <b> Evite desembarcar tarde da noite</b> atentando ao horário de desembarque no destino escolhido ao comprar sua passagem.
                            <b>Fique atenta ao pegar táxi ou transporte público</b> já que não é raro um taxista ou motorista de aplicativo fazer um caminho mais longo ao notar que o cliente não conhece a cidade. Tenha um mapa e confira o percurso antes de entrar no veículo.
                            <b>Escolha bem a acomodação</b> atentando sobre a localização e às avaliações. <b>Deixe uma cópia do seu roteiro com alguém da família ou amigos</b> além de manter contato diariamente, caso aconteça algo, as pessoas poderão ajudar, ou dar informações sobre a sua viagem ou chamando a emergência. <b>Evite caminhar à noite sozinha</b> por mais que pegar um táxi ou o transporte público saia mais caro, é melhor do que perder seus documentos e pertences em um lugar desconhecido. <b>Procure passeios em grupo</b> você pode fazer algumas amizades. <b>Não exagere no álcool</b> ele pode alterar a sua visão e a sua percepção tornando-a mais suscetível a roubo. <b>Leve seus mecanismos de defesa portátil para todo lugar</b> contra roubos ou abusadores. Spray de pimenta ou algo que possa te ajudar a se defender, como um chaveiro pontudo por exemplo. <b>Não saia sem seu telefone</b> ele é um item fundamental. Leve seu carregador na bolsa, confira o nível de bateria ao sair e tenha sempre na bolsa o endereço e o telefone do seu hotel. <b>Tenha todos os documentos essenciais para viajar sozinha</b> – RG, CNH ou outro documento de identificação pessoal oficial para viagem em território nacional, além do comprovante de vacinação contra o COVID-19.<b> Cuide da sua alimentação</b> procurando conhecer detalhes da gastronomia do seu destino, assim, evitando dores de cabeça futuras. O seguro viagem, mesmo em viagem nacional, é imprescindível para que se algo acontecer com você ou com sua bagagem, o atendimento esteja garantido.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>



        </div>

    )
}

export default SegurancaSecond;