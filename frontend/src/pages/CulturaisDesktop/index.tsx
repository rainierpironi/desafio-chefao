import React, { Fragment } from 'react'
import Culturaisfirst from '../../components/Culturais/Culturaisfirst/Culturaisfirst'
import Culturaissecond from '../../components/Culturais/Culturaissecond/Culturaissecond'
import Culturaisthird from '../../components/Culturais/Culturaisthird/Culturaisthird'

function Paginacult() {
  return (
    <Fragment>
        <Culturaisfirst/>
        <Culturaissecond/>
        <Culturaisthird/>
    </Fragment>
  )
}

export default Paginacult