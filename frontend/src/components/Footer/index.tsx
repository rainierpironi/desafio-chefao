import React from 'react';
import icon from '../../assets/Images/Rectangle22.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import * as Styled from './styled'
const Footer: React.FC = () => {
  return (
    <Styled.footer id="sticky-footer" className=" d-flex flex-row justify-content-around align-items-center py-4 bg-secondary text-white-50">
      <img src={icon} alt="icone" />
      <small>Copyright &copy; Mulheres viajantes</small>
    <small>Todos os direitos reservados</small>
    <div className="links">
    <a className="p-1 link-light" href="your link here"><FontAwesomeIcon icon={faInstagram} /></a>
    <a className="p-1 link-light" href="your link here"><FontAwesomeIcon icon={faFacebook} /></a>
    <a className="p-1 link-light" href="your link here"><FontAwesomeIcon icon={faYoutube} /></a>
    </div>
  </Styled.footer>
  )
}

export default Footer;