import React, { Fragment } from 'react'
import Culturaisfirst from '../../components/Culturais/Culturaisfirst/Culturaisfirst'
import Culturaissecond from '../../components/Culturais/Culturaissecond/Culturaissecond'
import Culturaisthird from '../../components/Culturais/Culturaisthird/Culturaisthird'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Paginaculturais() {
  return (
    <Fragment>
      <Header/>
        <Culturaisfirst/>
        <Culturaissecond/>
        <Culturaisthird/>
        <Footer/>
    </Fragment>
  )
}

export default Paginaculturais