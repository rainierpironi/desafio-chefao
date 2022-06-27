import styled from 'styled-components';
import {Link} from "react-router-dom"
export const header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  background: transparent;
  backdrop-filter: blur(1px);
  padding: 24px;
  font-size: 1rem;
  font-weight: bold;
  display:flex;
  flex-direction: row;

`

export const ul = styled.ul`
    list-style-type: none;
    height: 45px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const a = styled(Link)`
    color:white;
 font-size: x-large;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: blue;
}
&:active{
    color: red;
};
`