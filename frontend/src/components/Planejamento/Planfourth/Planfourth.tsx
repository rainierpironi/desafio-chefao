import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import "../Planfourth/Planfourth.css"

function Planfourth() {
    return (
        <Fragment>
            <div className='containerFourth'>
                <div className='hospedagemPlan'>Hospedagens</div>
                <div className='scrollHospedagem'>
                    <Accordion >
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="0">
                                <div className='sombra'>
                                    <Accordion.Header>Tipos de Hospedagens</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    Hotel
                                    O hotel é um estabelecimento que oferece estadia ao hóspede em quartos individuais, além de serviços como recepção, alimentação e serviço de quarto, mediante cobrança de diária. Os serviços oferecidos dependem da categoria de cada hotel: um hotel 5 estrelas atende uma série de requisitos que outro de apenas 1 estrela não tem a obrigatoriedade de oferecer. Nesse sentido, é claro que tudo isso impacta tanto no valor da diária quanto na experiência que o hóspede terá em suas instalações.

                                    Pousada
                                    Diferente do hotel, a pousada oferece uma estadia mais intimista ao hóspede. Isso porque esse meio de hospedagem pode chegar até no máximo 3 andares. Sua infraestrutura pode contemplar quartos individuais, chalés ou bangalôs, oferecendo serviços de recepção, alimentação e serviço de quarto – além de outros que estarão incluídos de acordo com o tamanho do estabelecimento.

                                    Resort
                                    Além de oferecer os serviços básicos de acomodação e alimentação, também conta com uma infraestrutura de lazer e entretenimento. Spa, academia, piscina, recreação e até atividades em meio a natureza no próprio estabelecimento são oferecidos aos hóspedes. Tudo em um único lugar!

                                    Hotel fazenda
                                    Esse meio de hospedagem também se assemelha ao hotel, mas como seu próprio nome já diz, o diferencial deste estabelecimento é a localização: ele encontra-se em um ambiente rural. Em meio a natureza, o hotel fazenda oferece aos seus hóspedes serviços básicos de acomodação, incluindo entretenimento e vivência do campo por meio de trilhas, passeios a cavalo e atividades que unem animais, meio ambiente e ar livre.

                                    Cama e café
                                    Também conhecido como Bed and Breakfast, esse meio de hospedagem caracteriza-se por ser residencial, ou seja, os proprietários da casa/apartamento oferecem ao hóspede um quarto para estadia e o café da manhã por um valor determinado.  Graças ao Airbnb, este jeito compartilhado de se hospedar ganhou muita relevância, fazendo com que muitas pessoas abrissem suas casas para receber hóspedes nos quatro cantos do mundo.

                                    Hotel histórico
                                    O que mais chama a atenção neste meio de hospedagem é sua instalação: um hotel histórico está situado em uma edificação preservada em sua forma original ou restaurada. Ou ainda, pode ter sido palco de importantes fatos histórico-culturais, independentemente de quando aconteceram. Nele, serviços básicos de acomodação e alimentação também são oferecidos aos hóspedes.

                                    Flat/apart-hotel
                                    Bem como um apartamento, esse meio de hospedagem possui comodidades de um hotel como serviço de recepção, limpeza e arrumação.
                                    O flat ou apart-hotel é um estabelecimento muito procurado por pessoas que desejam um local para se hospedar durante um período mais longo.

                                    Hostel (também conhecido como albergue)
                                    Oferece o serviço de estadia em quartos compartilhados, o que torna o valor da diária muito acessível, além da pensão que oferece moradia. Em quartos separados ou individuais, este modelo é um atrativo para estudantes ou pessoas que ainda não têm estabilidade financeira para arcar com os custos de uma casa.





                                </Accordion.Body>
                            </Accordion.Item>
                        </div>


                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="1">
                                <div className='sombra'>
                                    <Accordion.Header>Tipos de vaga de trabalho em troca de hospedagem</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    Ouviu falar em trabalho em troca de hospedagem, mas não faz ideia de que tipo de trabalho é esse?
                                    A resposta é simples: o céu é o limite! Algumas funções são mais comuns, como ajudar na recepção de hostels, mas dá pra encontrar vagas de work exchange nas mais diversas áreas de atuação. A premissa básica é simples: você trabalha algumas horas por semana (geralmente entre 20 e 30) e, em troca, recebe hospedagem gratuita. Essa parte é obrigatória, mas o tipo de acomodação varia, podendo ir desde uma cama num quarto compartilhado com hóspedes ou com outros voluntários (staff dorm) a até um quarto privativo com um banheiro só para você.

                                    Exemplos de funções de trabalho em troca de hospedagem:

                                    Receber e ajudar hóspedes
                                    Normalmente não é exigida experiência para esse tipo de vaga, que consiste basicamente em trabalhar na recepção de um hostel, pousada ou hotel. Fazer check-ins e check-outs, levar os hóspedes até o quarto e tirar dúvidas sobre a hospedagem e a cidade são algumas das tarefas comuns nessa área. É uma boa opção pra quem gosta de estar em contato com o público e especialmente pra quem pensa em trabalhar em hotelaria e quer entender de verdade como o negócio funciona.

                                    Comunicação e marketing
                                    Caso você tenha experiência com marketing, tenha feito (ou esteja fazendo) graduação em comunicação ou design, ou leve muito jeito pra coisa, é possível encontrar trabalho em troca de hospedagem nessa área. Muitos lugares, desde albergues a ONGs, procuram pessoas criativas pra ajudar a divulgá-los, quase sempre com foco em comunicação digital. Podem ser exigidas habilidades específicas dependendo da função: gerenciamento de redes sociais, marketing de conteúdo, design gráfico, fotografia e vídeo.

                                    Divertir e entreter hóspedes
                                    Se você leva muito jeito com pessoas e adora uma farra, esse tipo de função nem vai parecer trabalho. Sim, parece mentira, mas tem vários lugares pelo mundo afora oferecendo hospedagem e pedindo que, em troca, você divirta pessoas. Esse tipo de função envolve desde tocar instrumentos para entreter a galera no próprio albergue, a ser guia em pub crawls e passeios diurnos pela cidade. Uma ótima forma de conhecer gente e explorar o lugar aonde você vai, né? Tudo isso sem muitos pré-requisitos além de falar inglês e ser desenrolado(a).

                                    Reformar e decorar
                                    Essa é pra quem tem habilidades manuais, experiência com reforma e construção ou conhecimento sobre decoração. Vários albergues, pequenas empresas, casas e ONGs estão, enquanto você lê esse texto, à procura de alguém que possa consertar algo ou dar uma nova cara aos ambientes. E aí cabe de tudo: pintar paredes, fazer móveis, criar ilustrações, executar pequenos reparos...

                                    Ensinar e compartilhar
                                    Falar idiomas, entender de TI, ser bom em esportes: essas são algumas das habilidades que você pode compartilhar com os outros através de programas de work exchange. Seja como for, uma coisa é certa: você vai aprender muito mais do que ensinar. Algumas opções são ensinar inglês na Espanha ou na Chapada Diamantina, ou dar aulas de esportes na Costa Rica, por exemplo.

                                    Trabalho comunitário
                                    Pra quem busca um contato maior com a natureza e uma mudança de perspectiva sobre nossa relação com o meio ambiente, recomendo buscar iniciativas com uma pegada ecológica. Em alguns casos é preciso ter já algum conhecimento em agricultura ou jardinagem, mas muitos lugares se dispõem a ensinar aos voluntários sobre essas atividades.

                                    Cozinha e bar
                                    Se você tem experiência trabalhando em bares ou restaurantes, estuda gastronomia, quer atuar na área ou simplesmente arrasa na cozinha ou nos drinques, essa função tá te esperando. Rola trabalhar fazendo comida, ajudando o chef, lavando os pratos, atendendo no bar, fazendo coquetéis e até definindo o menu da casa.

                                    Melhorias em sites e SEO
                                    Se entende melhor com os códigos do que com pessoas? Sem problemas: habilidades de programação são muito requisitadas por estabelecimentos que precisam criar ou fazer ajustes em sites e melhorar seu posicionamento em mecanismos de busca. Se você tem os conhecimentos necessários, aproveite para viver uma (ou várias) experiências de trabalho em troca de hospedagem e ainda incrementar o currículo.



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