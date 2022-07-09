import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import "../Planfourth/Planfourth.css"

function Planfourth() {
    return (
        <Fragment>
            <div className='containerFourthPlan'>
                <div className='hospedagemPlan'>Hospedagens</div>
                <div className='scrollHospedagem'>
                    <Accordion >
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="0">
                                <div className='sombra'>
                                    <Accordion.Header>Tipos de Hospedagens</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <b>HOTEL </b> é um estabelecimento que oferece estadia ao hóspede em quartos individuais e serviços como recepção, alimentação e serviço de quarto, mediante cobrança de diária dependendo da categoria do hotel. Um hotel 5 estrelas atende requisitos que um de apenas 1 estrela não oferece, diferenças que impactam no valor da diária e na experiência do hóspede em suas instalações. <b> POUSADA </b> oferece uma estadia mais intimista. Pode chegar até no máximo 3 andares e sua infraestrutura pode contemplar quartos individuais, chalés ou bangalôs, com serviços de recepção, alimentação e serviço de quarto, além de outros de acordo com o estabelecimento. <b> RESORT </b> oferece os serviços básicos de acomodação e alimentação e conta com uma infraestrutura de lazer e entretenimento. Spa, academia, piscina, recreação e até atividades em meio a natureza no próprio estabelecimento são oferecidos aos hóspedes. <b> HOTEL FAZENDA </b> seu diferencial é a localização, um ambiente rural, em meio a natureza. Oferece serviços básicos de acomodação, incluindo entretenimento e vivência do campo por meio de trilhas, passeios a cavalo e atividades que unem animais, meio ambiente e ar livre. <b> CAMA E CAFÉ </b> conhecido como Bed and Breakfast, é residencial, os proprietários da casa/apartamento oferecem ao hóspede um quarto para estadia e o café da manhã por um valor determinado. Hospedagem que ganhou relevância com o Airbnb, já que muitos passaram a abrir suas casas para receber hóspedes. <b> HOTEL HISTÓRICO </b> caracteriza-se por estar situado em uma edificação preservada em sua forma original ou restaurada, podendo ter sido palco de importantes fatos histórico-culturais. Oferece serviços básicos de acomodação e alimentação também são oferecidos aos hóspedes. <b> FLAT/APART-HOTEL </b> bem como um apartamento, possui comodidades de um hotel como serviço de recepção, limpeza e arrumação e é muito procurado por pessoas que desejam um local para se hospedar durante um período mais longo. <b> HOSTEL (TAMBÉM CONHECIDO COMO ALBERGUE) </b> oferece o serviço de estadia em quartos compartilhados, o que torna o valor da diária mais acessível. Em quartos separados ou individuais, é um modelo atrativo para estudantes ou pessoas que ainda não têm estabilidade financeira para arcar com os custos de uma casa.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="1">
                                <div className='sombra'>
                                    <Accordion.Header>Tipos de vaga de trabalho em troca de hospedagem</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                   <b>RECEBER E AJUDAR HÓSPEDES </b>consiste em trabalhar na recepção de um hostel, pousada ou hotel. Fazer check-ins e check-outs, levar os hóspedes até o quarto e tirar dúvidas sobre a hospedagem e a cidade, boa opção pra quem gosta de estar em contato com o público. <b> COMUNICAÇÃO E MARKETING </b>pra quem tem experiência na área, fez (ou está fazendo) graduação em comunicação ou design? Muitos lugares, desde albergues a ONGs, procuram pessoas criativas pra ajudar a divulgá-los, quase sempre com foco em comunicação digital. Algumas habilidades exigidas dependendo da função: gerenciamento de redes sociais, marketing de conteúdo, design gráfico, fotografia e vídeo. <b> DIVERTIR E ENTRETER HÓSPEDES </b> envolve desde tocar instrumentos, a ser guia em pub crawls e passeios diurnos pela cidade. Se você leva jeito com pessoas, tem vários lugares oferecendo hospedagem e pedindo que, em troca, que você divirta pessoas. Uma forma de conhecer gente e explorar o lugar aonde você vai. <b> REFORMAR E DECORAR </b> é pra quem tem habilidades manuais, experiência com reforma e construção ou conhecimento sobre decoração. Vários albergues, pequenas empresas, casas e ONGs estão, à procura de alguém que possa consertar algo ou dar uma nova cara aos ambientes, como: pintar paredes, fazer móveis, criar ilustrações ou executar pequenos reparos.<b> ENSINAR E COMPARTILHAR  </b>é uma opção pra quem fala idiomas, tem conhecimento de TI, ou é bom em esportes. Existem programas de work exchange, aonde você pode ensinar inglês ou dar aulas de esportes. <b> TRABALHO COMUNITÁRIO </b> é pra quem busca um contato maior com a natureza e uma mudança de perspectiva sobre nossa relação com o meio ambiente. Em alguns casos é preciso ter já algum conhecimento em agricultura ou jardinagem, mas, muitos lugares se dispõem a ensinar aos voluntários sobre essas atividades. <b> COZINHA E BAR </b>pra você que tem experiência trabalhando em bares ou restaurantes, estuda gastronomia, quer atuar na área ou simplesmente arrasa na cozinha ou nos drinques. Rola trabalhar fazendo comida, ajudando o chef, lavando os pratos, atendendo no bar, fazendo coquetéis e até definindo o menu da casa. <b> MELHORIAS EM SITES E SEO </b> é para quem tem habilidades com programação. Muitos estabelecimentos precisam criar ou fazer ajustes em sites e melhorar seu posicionamento em mecanismos de busca. Se você tem os conhecimentos necessários, aproveite uma (ou várias) experiências de trabalho em troca de hospedagem.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </Accordion>
                </div>
            </div >
        </Fragment>
    )
}

export default Planfourth