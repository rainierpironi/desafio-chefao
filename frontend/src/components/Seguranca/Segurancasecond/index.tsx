import React from 'react';
import "./styles.css"
import { Accordion } from 'react-bootstrap';

const SegurancaSecond: React.FC = () => {
    return (
        <div className='containerSegSecond'>
            <div className='tituloSegSecond'>
                <p>Precauções</p>
            </div>
            <div className='dropSegSecond'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Cuidados essenciais</Accordion.Header>
                        <Accordion.Body>
                           <b>EVITE DESEMBARCAR TARDE DA NOITE </b> atentando ao horário de desembarque no destino escolhido ao comprar sua passagem.
                            <b>FIQUE ATENTA AO PEGAR TÁXI OU TRANSPORTE PÚBLICO </b> já que não é raro um taxista ou motorista de aplicativo fazer um caminho mais longo ao notar que o cliente não conhece a cidade. Tenha um mapa e confira o percurso antes de entrar no veículo.
                            <b>ESCOLHA BEM A ACOMODAÇÃO </b> atentando sobre a localização e às avaliações. <b>DEIXE UMA CÓPIA DO SEU ROTEIRO COM ALGUÉM DA FAMÍLIA OU AMIGOS </b> além de manter contato diariamente, caso aconteça algo, as pessoas poderão ajudar, ou dar informações sobre a sua viagem ou chamando a emergência. <b>EVITE CAMINHAR À NOITE SOZINHA </b> por mais que pegar um táxi ou o transporte público saia mais caro, é melhor do que perder seus documentos e pertences em um lugar desconhecido. <b>PROCURE PASSEIOS EM GRUPO </b> você pode fazer algumas amizades. <b>NÃO EXAGERE NO ÁLCOOL </b> ele pode alterar a sua visão e a sua percepção tornando-a mais suscetível a roubo. <b>LEVE SEUS MECANISMOS DE DEFESA PORTÁTIL PARA TODO LUGAR </b> contra roubos ou abusadores. Spray de pimenta ou algo que possa te ajudar a se defender, como um chaveiro pontudo por exemplo. <b>NÃO SAIA SEM SEU TELEFONE </b> ele é um item fundamental. Leve seu carregador na bolsa, confira o nível de bateria ao sair e tenha sempre na bolsa o endereço e o telefone do seu hotel. <b>TENHA TODOS OS DOCUMENTOS ESSENCIAIS PARA VIAJAR SOZINHA</b> – RG, CNH ou outro documento de identificação pessoal oficial para viagem em território nacional, além do comprovante de vacinação contra o COVID-19.<b> CUIDE DA SUA ALIMENTAÇÃO </b> procurando conhecer detalhes da gastronomia do seu destino, assim, evitando dores de cabeça futuras. O seguro viagem, mesmo em viagem nacional, é imprescindível para que se algo acontecer com você ou com sua bagagem, o atendimento esteja garantido.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}
export default SegurancaSecond;