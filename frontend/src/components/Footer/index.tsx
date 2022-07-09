import React from 'react';
import LogoFooter from '../../assets/Images/logo-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import * as Styled from './styled'
const Footer: React.FC = () => {
  return (
    <footer id="sticky-footer" style={{ backgroundColor: 'black' }} className=" d-flex flex-row justify-content-around align-items-center py-3 text-white-50">
      <img src={LogoFooter} alt="icone" />
      <small>&copy;2022 - LAVAIELA.</small>
    <small>Todos os direitos reservados.</small>
    <div className="links">
    <a className="p-1 link-light" href="your link here"><FontAwesomeIcon icon={faYoutube} /></a>
    <a className="p-1 link-light" href="your link here"><FontAwesomeIcon icon={faInstagram} /></a>
    <a className="p-1 link-light" href="your link here"><FontAwesomeIcon icon={faFacebook} /></a>
    </div>
  </footer>
  )
}

export default Footer;