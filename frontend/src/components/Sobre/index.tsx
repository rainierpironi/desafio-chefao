import { Fragment } from 'react'
import './styles.css'

const Sobre: React.FC = () => {
    return (
        <Fragment>
            <div className="container-sobre">
                <div className='titulo-sobre'>
                    <h1>Sobre</h1>
                </div>

                <div className='conteudo-sobre d-flex'>
                    <div className='video-sobre'>
                        <iframe className='video-sobre' width="445" height="450" src="https://www.youtube.com/embed/TckrIc-4CsU" title="#24 - Mulheres que Viajam Sozinhas - Com Carolina Viana e Kamy Queiroz - Podcast Saída de Emergência" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='container-texto-sobre'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem illo cumque cum incidunt aliquam, nisi quisquam magni. Rem deserunt, accusamus explicabo voluptas dolore aliquam ad iusto quam aperiam eos?
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Sobre;

