import React, { Fragment } from 'react'
import "./Conecte.css"
import Norte from "../../assets/Images/imgnorte.png"
import Nordeste from "../../assets/Images/imgnordeste.png"
import CentroOeste from "../../assets/Images/imgcentrooeste.png"
import Sudeste from "../../assets/Images/imgsudeste.png"
import Sul from "../../assets/Images/imgsul.png"
import Seta from "../../assets/Images/chevron-down.svg"

function Conecte() {
  return (
    <Fragment>

      <div className='containerGeralConecte' id='conecte-se'>
        <div className='blur'>
          <a href="#conecte-se" className='seta-direcao'>
            <img src={Seta} alt="seta" />
          </a>
        </div>
        <div className='containerConecte'>
          <div className="textoConecte">
            <h1>Conecte-se</h1>
            <h2>Selecionando uma região do Brasil você será direcionada para um grupo de mulheres viajantes solo Telegram</h2>
          </div>
        </div>
      </div>

      <div ></div>
      <div className="containerimg">
        <div>
          <img src={Norte} alt="Mapa norte" />
        </div>
        <div>
          <img src={Nordeste} alt="Ma´´a Nordeste" />
        </div>
        <div>
          <img src={CentroOeste} alt="Mapa centro oeste" />
        </div>
        <div>
          <img src={Sudeste} alt="Mapa Sudeste" />
        </div>
        <div>
          <img src={Sul} alt=" Mapa Sul" />
        </div>

      </div>

      <div className='containerblur'>
        <div>
          <div className=' blur-2'>
            <a href="#apoie" className='seta-direcao'>
              <img src={Seta} alt="seta" />
            </a>
          </div>
        </div>

      </div>

    </Fragment>
  )
}

export default Conecte