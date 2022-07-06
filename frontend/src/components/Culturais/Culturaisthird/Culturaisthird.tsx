import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import "../../Culturais/Culturaisthird/Culturaisthird.css"

function Culturaisthird() {
    return (
        <Fragment>
            <div className='containerThird'>
                <div className='milhasThird'>Gastronomia</div>
                <div className='scrollMilhas'>
                    <Accordion >
                        <div className='adjustThird'>
                            <Accordion.Item eventKey="0">
                                <div className='sombra'>
                                    <Accordion.Header>Gastronomia do Norte</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <b>Pato no Tucupi </b>
                                    Um dos pratos mais populares, composto por pato, jambu e tucupi – um líquido extraído da mandioca brava. Como acompanhamento, pode ser servido arroz ou farofa de mandioca.
                                    <b>Caldeirada </b>
                                    Feita com peixes em postas (pode ser filhote, dourada, tucunaré, pescada amarela etc.), temperos, ovos, azeite e tucupi.
                                   <b> Maniçoba </b>
                                    Espécie de feijoada produzida com folhas de mandioca que substituem o feijão. Leva paio, costelinha e carne de porco. É servida com farinha, arroz e pimenta.
                                   <b> Damorida </b>
                                    Receita indígena feita com carne ou peixe assado e pimenta malagueta, pimenta jiquitaia, sal e goma de tapioca.
                                    <b>Doces </b>
                                    Em geral, são criados a partir das frutas da Amazônia, como doces de açaí, cupuaçu, camu-camu, tucumã etc.
                                    <b>Açaí </b>
                                    Embora no restante do país o açaí seja consumido doce, com leite condensado e outros, na região norte ele é consumido com farinha de mandioca e com pratos salgados.
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustThird'>
                            <Accordion.Item eventKey="1">
                                <div className='sombra'>
                                    <Accordion.Header>Gastronomia do Nordeste</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <b>Tapioca ou Beiju </b>
                                    Massa feita com a goma originária da fécula de mandioca que foi criada pelos índios tupis-guaranis. Com a chegada dos colonizadores, a goma passou por algumas modificações, dando origem à tapioca.
                                    <b>Baião de Dois </b>
                                    Quando a seca atingia o sertão nordestino, a comida era escassa e era preciso guardar o que fosse possível, evitando o desperdício. Foi assim que, no Ceará, nasceu o Baião de Dois, uma mistura de arroz, feijão, carne seca e queijo coalho.
                                    <b>Acarajé </b>
                                    Acarajé é um bolinho de feijão fradinho que leva sal, alho, cebola e gengibre. Ele é frito no azeite de dendê e recheado com camarão seco temperado.
                                    <b>Moqueca </b>
                                    Prato no qual o peixe é cozido com azeite de dendê, leite de coco, pimenta e coentro.
                                    <b>Vatapá </b>
                                    Em geral é feito com pão, camarão, fubá ou farinha de rosca, castanha de caju, pimenta, leite de coco, amendoim e azeite de dendê – e servido como recheio para o acarajé.
                                    <b>Caruru </b>
                                    Prato produzido com quiabo, camarão, azeite de dendê e temperos misturados à farinha de mandioca e caldo.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustThird'>
                            <Accordion.Item eventKey="2">
                                <div className='sombra'>
                                    <Accordion.Header>Gastronomia do Centro-Oeste</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <b>Arroz com pequi </b>
                                    Pequi é muito presente na culinária do centro-oeste e pode ser consumido com frango e arroz.
                                    <b>Empadão goiano </b>
                                    Torta salgada recheada com diversos condimentos, carnes, queijos e verduras. A massa é feita com trigo, azeite, ovos e sal.
                                    <b>Galinhada </b>
                                    Feita com arroz, frango e pode levar pequi ou pimentão.
                                    <b>Pamonha </b>
                                    Iguaria conhecida em todo o Brasil, e, bastante consumida no interior de Goiás.
                                    <b>Vaca atolada </b>
                                    Feita com costela de boi mergulhada em um caldo com gordura e mandioca.
                                    <b>Tererê </b>
                                    Tipo um chimarrão feito também com erva mate, mas toma-se frio. Muito consumido no Mato Grosso do Sul.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustThird'>
                            <Accordion.Item eventKey="3">
                                <div className='sombra'>
                                    <Accordion.Header>Gastronomia do Sudeste</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <b>Feijoada </b>
                                    Embora seja típica de todo o país, é no Rio de Janeiro onde ela é mais consumida.
                                    <b>Pão de Queijo </b>
                                    Bolinho feito com polvilho e queijo, ele é extremamente consumido em Minas Gerais.
                                    <b>Feijão tropeiro </b>
                                    Mistura de feijão, torresmo, farinha de mandioca, ovos, linguiça, alho, cebola e temperos.
                                    <b>Cuscuz à Paulista </b>
                                    Cuscuz recheado com camarão, sardinha, cebola, azeitona, pimentão etc. misturados à farinha de milho ou de mandioca.
                                    <b>Sanduíche de mortadela e Bauru </b>
                                    Lanches típicos de São Paulo. O Bauru é feito, originalmente, com pão francês, tomate, picles, rosbife, queijo, orégano e sal.
                                    <b>Torta capixaba </b>
                                    Torta recheada com frutos do mar, além de bacalhau e palmito.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustThird'>
                            <Accordion.Item eventKey="4">
                                <div className='sombra'>
                                    <Accordion.Header>Gastronomia do Sul</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <b>Churrasco </b>
                                    Carne bovina, suína ou caprina. Além das carnes, também há muitos preparos com linguiça.
                                    <b>Arroz carreteiro </b>
                                    Mistura de arroz com carne de charque.
                                    <b>Polenta </b>
                                    Prato típico italiano preparado com fubá, água e sal, que pode ser cozida ou frita. Pode ser servida pura ou como acompanhamento.
                                    <b>Chimarrão </b>
                                    O hábito veio dos índios e se mantém até hoje entre os sulistas, especialmente os gaúchos.
                                    <b>Ambrosia </b>
                                    Sobremesa tipicamente portuguesa e muito consumida no sul. Também é chamada de manjar dos deuses e é feita com ovos, leite e açúcar.
                                    <b>Cuca </b>
                                    Espécie de pão doce de origem alemã. Um dos sabores mais comuns é de banana, mas também pode ser feita com maçã, abacaxi, Chocolate, doce de leite, goiabada etc.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </Accordion>
                </div>
            </div >
        </Fragment>
    )
}
export default Culturaisthird