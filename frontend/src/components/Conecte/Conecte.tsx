import React, { Fragment } from 'react'
import "./Conecte.css"
import Norte from "../../assets/Images/imgnorte.png"
import Nordeste from "../../assets/Images/imgnordeste.png"
import CentroOeste from "../../assets/Images/imgcentrooeste.png"
import Sudeste from "../../assets/Images/imgsudeste.png"
import Sul from "../../assets/Images/imgsul.png"
import Seta from "../../assets/Images/chevron-down.svg"
import { Link } from 'react-router-dom'

function Conecte() {
  return (
    <Fragment>

      <div className='containerGeralConecte' id='conecte-se'>
        <div className='containerConecte'>
          <div className="textoConecte">
            <h1>Conecte-se</h1>
            <h2>Selecione um grupo de mulheres viajantes solo</h2>
          </div>
        </div>
      </div>

      <div ></div>
      <div className="containerimg">
        <div className='linkRegiao'>
          <Link to="/destinos/norte">
            <img id="efeito" src={Norte} alt="Mapa norte" />
          </Link>
        </div>
        <div className='linkRegiao'>
          <Link to="/destinos/nordeste">
            <img id="efeito" src={Nordeste} alt="Ma´´a Nordeste" />
          </Link>
        </div>
        <div className='linkRegiao'>
          <Link to="/destinos/centro-oeste">
            <img id="efeito" src={CentroOeste} alt="Mapa centro oeste" />
          </Link>
        </div>
        <div className='linkRegiao'>
          <Link to="/destinos/sudeste">
            <img id="efeito" src={Sudeste} alt="Mapa Sudeste" />
          </Link>
        </div>
        <div  className='linkRegiao'>
          <Link to="/destinos/sul">
            <img id="efeito" src={Sul} alt=" Mapa Sul" />
          </Link>
        </div>

      </div>

      <div className='containerblur'>
        <div>
          <div className='gradienteConecte'>
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