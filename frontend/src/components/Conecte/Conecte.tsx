import React, { Fragment } from 'react'
import "./Conecte.css"
import Norte from "../../assets/Images/Mulheresnorte.png"
import Nordeste from "../../assets/Images/Mulheresnordeste.png"
import CentroOeste from "../../assets/Images/Mulherescentro.png"
import Sudeste from "../../assets/Images/Mulheressudeste.png"
import Sul from "../../assets/Images/Mulheressul.png"
import Seta from "../../assets/Images/chevron-down.svg"
import { Link } from 'react-router-dom'

function Conecte() {
  return (
      <div className='bannerConecte'>

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
            <a href="https://t.me/+UxRyV5jcw89jMTFh">
              <img id="efeito" src={Norte} alt="Mapa norte" />
            </a>
          </div>
                    <div className='linkRegiao'>
            <a href="https://t.me/+J1SsMApRiao2NDE5">
              <img id="efeito" src={Nordeste} alt="Ma´´a Nordeste" />
            </a>
          </div>
          <div className='linkRegiao'>
            <a href="https://t.me/+Ktv_mYFjP6U5NzQx">
              <img id="efeito" src={CentroOeste} alt="Mapa centro oeste" />
            </a>
          </div>
          <div className='linkRegiao'>
            <a href="https://t.me/+mZB7O0UQRSI2NTI5">
              <img id="efeito" src={Sudeste} alt="Mapa Sudeste" />
            </a>
          </div>
          <div className='linkRegiao'>
            <a href="https://t.me/+LFjNJdDXj2o1MmU5">
              <img id="efeito" src={Sul} alt=" Mapa Sul" />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Conecte