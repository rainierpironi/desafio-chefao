import React from 'react';
import { Link } from 'react-router-dom';
import SetaVoltar from '../../../assets/Images/seta-voltar.png';
import "./styles.css";

// import { Container } from './styles';

const SegurancaFirst: React.FC = () => {
  return (
    <div className='containerSegFirst'>
      <Link to={'/'}>
        <img src={SetaVoltar} className='voltarPagina' alt="seta-voltar" />
      </Link>
      <div className='containerTituloFirst'>
        <div className='tituloSegFirst'>
          <h1>Dicas de Segurança</h1>
          <p>Identificando fatores de risco para evitá-los...</p>
        </div>
      </div>
    </div>

  )
}

export default SegurancaFirst;