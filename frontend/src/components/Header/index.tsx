import * as Styled from './styled'
import { Nav, Navbar, NavLink, Form, FormControl, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon from "../../assets/Images/Rectangle21.png"
import React, { useState } from 'react';
const Header: React.FC = () => {


  return (
    <div className="header">
    <Navbar className="p-2" expand="md" fixed="top" collapseOnSelect bg="transparent" variant="dark">
      <img src={icon} alt="icone" />
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse className="justify-content-center" id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Sobre</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/about">Destinos</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/contact">Dicas</NavLink>
                    <NavLink  eventKey="4" as={Link} to="/contact">Conecte-se</NavLink>
                    <NavLink  eventKey="5" as={Link} to="/contact">Apoie</NavLink>
                    <NavLink  eventKey="6" as={Link} to="/contact">Contato</NavLink>
                </Nav>
            </Navbar.Collapse>
            <Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-button-dark-example1">
    Escolha aqui seu destino...
  </Dropdown.Toggle>

  <Dropdown.Menu variant="dark">
    <Dropdown.Item Link to="/">Action</Dropdown.Item>
    <Dropdown.Item Link to="/">Another action</Dropdown.Item>
    <Dropdown.Item Link to="/">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </Navbar>
        </div>
  //   <Styled.header>
  //   <div className="logo-area">
  //     <img src={icon} alt="omma" />
  //   </div>
  //   <nav className="menu">
  //     <Styled.ul>
  //       <Styled.li>
  //         <Styled.a to="/">Sobre</Styled.a>
  //       </Styled.li>
  //       <Styled.li>
  //         <Styled.a to="/receitas">Destinos</Styled.a>
  //       </Styled.li>
  //       <Styled.li>
  //         <Styled.a to="/contatos">Dicas</Styled.a>
  //       </Styled.li>
  //       <Styled.li>
  //         <Styled.a to="/contatos">Conecte-se</Styled.a>
  //       </Styled.li>
  //       <Styled.li>
  //         <Styled.a to="/contatos">Apoie</Styled.a>
  //       </Styled.li>
  //       <Styled.li>
  //         <Styled.a to="/contatos">Contato</Styled.a>
  //       </Styled.li>
  //     </Styled.ul>
  //   </nav>
  // </Styled.header>
  )
}

export default Header;