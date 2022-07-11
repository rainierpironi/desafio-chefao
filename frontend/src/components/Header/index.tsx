import { Link } from "react-router-dom";
import Logo from "../../assets/Images/logo-header.png"
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import * as Styled from "./styled"
// import { HashLink } from 'react-router-hash-link';


const Header: React.FC = () => {

  

  return (
    <Navbar style={{ backgroundColor: 'black', fontFamily: 'Roboto', paddingRight:'46px' }} variant="dark" expand="lg">
      <Container fluid className='ms-3 me-3'>
        <a href="/"><img className="ps-5" src={Logo} alt="icone" /></a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-center flex-grow-1 pe-3"
            style={{ maxHeight: '240px' }}
            navbarScroll
          >
            <li className="nav-item">
              <a className="nav-link text-light" style={{ paddingRight:'52px' }} href="/#sobre">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" style={{ paddingRight:'52px' }}  href="/#destinos">Destinos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" style={{ paddingRight:'52px' }}  href="/#dicas">Dicas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" style={{ paddingRight:'52px' }}  href="/#conecte-se">Conecte-se</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" style={{ paddingRight:'52px' }}  href="/#apoie">Apoie</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light me-3" href="/#contato">Contato</a>
            </li>
          </Nav>
          <Styled.Barra title={
            <span className="text-primary text-light my-auto">Escolha o seu destino...</span>
          } style={{ border: ' solid 3px white', borderRadius: '2em', backgroundColor: 'black' }} id="navbarScrollingDropdown">
            <Link className="nav-link text-white" to="/destinos/norte">Norte</Link>
            <NavDropdown.Divider />
            <Link className="nav-link text-white" to="/destinos/nordeste">Nordeste</Link>
            <NavDropdown.Divider />
            <Link className="nav-link text-white" to="/destinos/centro-oeste">Centro-Oeste</Link>
            <NavDropdown.Divider />
            <Link className="nav-link text-white" to="/destinos/sudeste">Sudeste</Link>
            <NavDropdown.Divider />
            <Link className="nav-link text-white" to="/destinos/sul">Sul</Link>
          </Styled.Barra>
        </Navbar.Collapse>
      </Container>
    </Navbar>






    /* <nav className=" p-1 navbar navbar-expand-md navbar-dark bg-black">
      <div className="container m-2">
    <img className="ps-5" src={icon} alt="icone" />
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-0 align-items-center gap-4">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Sobre</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Destinos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Dicas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Conecte-se</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Apoie</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Contato</Link>
          </li>
        </ul>
      </div>
      <div className="nav-item dropdown">
      <button className="btn btn-dark bg-black rounded-pill dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
        Escolha o seu destino...
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
      </div>
    </nav> */

  )
}

export default Header;






{/* //     <Styled.header>
//     <Navbar className="p-2" expand="md" fixed="top" collapseOnSelect bg="black" variant="dark">
//       <img src={icon} alt="icone" />
//             <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
//             <Navbar.Collapse className="justify-content-center" id="navbarScroll">
//                 <Nav>
//                     <NavLink  eventKey="1" as={Link} to="/">Sobre</NavLink>
//                     <NavLink  eventKey="2" as={Link} to="/about">Destinos</NavLink>
//                     <NavLink  eventKey="3" as={Link} to="/contact">Dicas</NavLink>
//                     <NavLink  eventKey="4" as={Link} to="/contact">Conecte-se</NavLink>
//                     <NavLink  eventKey="5" as={Link} to="/contact">Apoie</NavLink>
//                     <NavLink  eventKey="6" as={Link} to="/contact">Contato</NavLink>
//                     <Dropdown >
//   <Dropdown.Toggle variant="secondary" id="dropdown-button-dark-example1">
//     Escolha aqui seu destino...
//   </Dropdown.Toggle>

//   <Dropdown.Menu variant="dark">
//     <Dropdown.Item Link to="/">Action</Dropdown.Item>
//     <Dropdown.Item Link to="/">Another action</Dropdown.Item>
//     <Dropdown.Item Link to="/">Something else</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//         </Styled.header>
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
  // </Styled.header> */}