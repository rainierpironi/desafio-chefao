import React, { Fragment } from 'react'
import { Card, Container, Figure } from 'react-bootstrap'
import Imagem from "../../assets/Images/apoie.jpg"
import "./Apoie.css"

function Apoie() {
    return (
        <Fragment>
            <div className='containerApoie'>
                <div className='textoApoie'>
                    <h1>Apoie</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum recusandae necessitatibus iure ullam tempore vel voluptatum accusamus quis distinctio, odit quas repellat debitis voluptatem soluta eos? Eum non voluptate doloribus libero deserunt nisi quis dolores reprehenderit adipisci perferendis asperiores officiis, labore nobis impedit tenetur sint optio iste, aspernatur illo. Ipsum omnis porro ab aperiam. Fugit vitae eaque fuga. Et voluptas optio consectetur, quos totam eum ipsa dignissimos distinctio praesentium ducimus vitae est quo deleniti vel, dolor autem veritatis ad repellendus, error velit sapiente pariatur nobis alias. Eveniet consectetur aspernatur ratione repudiandae delectus nisi dolore, omnis, distinctio quas eligendi hic magni?
                    </p>
                </div>

                <Figure className='figura' >
                    <Figure.Image
                        // width={650}
                        // height={180}
                        alt="171x180"
                        src={Imagem}
                    />
                    
                </Figure>

            </div>

        </Fragment>
    )
}

export default Apoie