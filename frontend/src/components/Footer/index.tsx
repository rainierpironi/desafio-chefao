import React from 'react';
import LogoFooter from '../../assets/Images/logo-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer: React.FC = () => {
  return (
    <footer id="sticky-footer" style={{ backgroundColor: 'black' }} className=" d-flex flex-row justify-content-around align-items-center py-3 text-white-50">
      <img src={LogoFooter} alt="icone" />
      <small>&copy;2022 - LAVAIELA.</small>
    <small>Todos os direitos reservados.</small>
    <div className="links">
    <a className="p-1 link-light" href="https://www.youtube.com/channel/UCH2nvI91ORL9oFRzF0h-vHA" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
    <a className="p-1 link-light" href="https://www.instagram.com/lavaielaig/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
    <a className="p-1 link-light" href="https://www.facebook.com/Lavaiela-107218732053353" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
    </div>
  </footer>
  )
}

export default Footer;