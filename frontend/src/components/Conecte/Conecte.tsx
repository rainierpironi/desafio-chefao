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
          <img id="efeito" src={Norte} alt="Mapa norte" />
        </div>
        <div>
          <img id="efeito"  src={Nordeste} alt="Ma´´a Nordeste" />
        </div>
        <div>
          <img id="efeito"  src={CentroOeste} alt="Mapa centro oeste" />
        </div>
        <div>
          <img id="efeito" src={Sudeste} alt="Mapa Sudeste" />
        </div>
        <div>
          <img id="efeito"  src={Sul} alt=" Mapa Sul" />
        </div>

      </div>

      <div className='containerblur'>
        <div>
          <div className='gradiente2'>
            <a href="#apoie" className='seta'>
              <img src={Seta} alt="seta" />
            </a>
          </div>
        </div>

      </div>

    </Fragment>
  )
}

export default Conecte