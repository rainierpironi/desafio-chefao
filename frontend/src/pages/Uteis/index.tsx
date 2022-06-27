import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Uteisfirst from '../../components/Uteis/Uteisfirst/Uteisfirst'
import Uteisfourth from '../../components/Uteis/Uteisfourth/Uteisfourth'
import Uteissecond from '../../components/Uteis/Uteissecond/Uteissecond'
import Uteisthird from '../../components/Uteis/Uteisthird/Uteisthird'

function Uteis() {
  return (
    <Fragment>
      <Header/>
        <Uteisfirst/>
        <Uteissecond/>
        <Uteisthird/>
        <Uteisfourth/>
        <Footer/>

</Fragment>
  )
}

export default Uteis