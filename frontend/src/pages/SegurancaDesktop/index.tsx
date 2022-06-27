import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SecurityFirst from '../../components/Seguranca/Segurancafirst'
import SecuritySecond from '../../components/Seguranca/Segurancasecond'

function PaginaSecurity() {
  return (
    <Fragment>
      <Header/>
        <SecurityFirst/>
        <SecuritySecond/>
        <Footer/>
    </Fragment>
      )
}

export default PaginaSecurity