import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SegurancaFirst from '../../components/Seguranca/Segurancafirst'
import SecurityFirst from '../../components/Seguranca/Segurancafirst'
import SegurancaSecond from '../../components/Seguranca/Segurancasecond'


function PaginaSecurity() {
  return (
    <Fragment>
      <Header/>
        <SegurancaFirst/>
        <SegurancaSecond/>
        <Footer/>
        
        </Fragment>
      )
}

export default PaginaSecurity