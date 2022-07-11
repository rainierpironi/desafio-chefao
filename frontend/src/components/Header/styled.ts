import styled from 'styled-components';
import {Link} from "react-router-dom"

import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"

// export const header = styled.header`

//   width: 100%;
//     padding: 24px;
//   font-size: 1rem;
//   font-weight: bold;
//   display:flex;
//   justify-content: space-between;
//   position: fixed;
//     top: 0;
//     right: 0;
//     left: 0;
// `

// export const ul = styled.ul`
//     list-style-type: none;
//     height: 45px;
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//     list-style-type: none;
//     display: flex;
//     justify-content: center;
//     align-items: center;

// `

// export const li = styled.li`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
// `

// export const a = styled(Link)`
//     color:white;
//  font-size: x-large;
//  text-decoration: none;
//  margin: 10px;
// &:hover,
// &:focus{
//     color: blue;
// }
// &:active{
//     color: red;
// };
// `

export const Barra = styled(NavDropdown)`
    /* right: 60px; */


.dropdown-toggle::after{
    color: white;
}

.dropdown-menu{
    padding: 0.2rem 0;
    margin: 5px;
    min-width: 12.5rem;
}
.dropdown-divider {
    height: 0;
    margin: 0.01rem 0;
    overflow: hidden;
    border-top: 1px solid white;
}

.dropdown-menu a{
    
    background-color: #000;
 
}

.dropdown-menu a:hover {
    background-color: #F49729 !important;
    transition: 0.2s;
    color: #000 !important;
    }
`

// export const = (NavBarColl)`
// @media (min-width: 885px){
//     display: flex!important;
//     flex-basis: auto;
// }


