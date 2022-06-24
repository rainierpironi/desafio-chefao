import React, { Fragment } from 'react'
import "./Conecte.css"
import Norte from "../../assets/Images/norte.png"
import Nordeste from "../../assets/Images/nordeste.png"
import CentroOeste from "../../assets/Images/centro-oeste.png"
import Sudeste from "../../assets/Images/sudeste.png"
import Sul from "../../assets/Images/sul.png"

function Conecte() {
  return (
    <Fragment>

      <div className='containerGeralConecte'>
        <div className='containerConecte'>
          <div className="textoConecte">
            <h1>Conecte-se</h1>
            <h2>Selecionando uma região do Brasil você será direcionada para um grupo de mulheres viajantes solo Telegram</h2>
          </div>
        </div>

        <div className='containerRegioes'>
          <div>
            <div className='regiaoNorte'>
              <img src={Norte} alt="Mapa da Regiao Norte" />
              <p id='alinhamentoMulheres'>Mulheres do</p>
              <p> Norte</p>
            </div>
          </div>
          <div className='regiaoNordeste'>
            <div>
              <img src={Nordeste} alt="Mapa da Regiao Nordeste" />
              <div className='alinhamentoTextoNordeste'>
              <p id='alinhamentoMulheres'>Mulheres do</p>
              <p>Nordeste</p>
              </div>
            </div>
          </div>
          <div>
          <div className='regiaoCentro'>
            <img src={CentroOeste} alt="Mapa da Regiao Centro Oeste" />
            <p id='alinhamentoMulheres'>Mulheres do</p>
              <p>Centro-Oeste</p>
          </div>
          </div>
          <div className='regiaoSudeste'>
          <div>
            <img src={Sudeste} alt="Mapa Sudeste" />
            <p id='alinhamentoMulheres'>Mulheres do</p>
              <p>Sudeste</p>
          </div>
          </div>
          <div>
          <div className='regiaoSul'>
            <img src={Sul} alt="Mapa Sul" />
            <div className='alinhamentoSul'>
            <p id='alinhamentoMulheres'>Mulheres do</p>
              <p>Sul</p>
              </div>
          </div>
          </div>
        </div>




      </div>












    </Fragment>
  )
}

export default Conecte