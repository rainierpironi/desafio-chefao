
import { Link } from "react-router-dom";
import icon from "../../assets/Images/logo_mulheresviajantesolo_branco.png"



const Header: React.FC = () => {

  return (

    
<nav className=" p-3 navbar navbar-expand-md navbar-dark bg-black">
<img src={icon} alt="icone" />
  <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-0">
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
  <div className="dropdown">
  <button className="btn btn-dark bg-black rounded-pill dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
    Escolha o seu destino...
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
</nav>
  
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