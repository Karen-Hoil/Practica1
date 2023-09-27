import React from 'react'
import Header from '../components/header'

function Home() {
  return (
    <>
    <div className='dashboard1'>
    <Header/>
    <h1 className='Bienvenida'>
        Portafolio donde se gusardaran nuestras actividades
    </h1>
    <div className='Integrantes'>
    <p>Integrantes:</p>
    <h4>Ana Karen Hoil Hoil</h4>
    <h4>Gustavo Gutierrez Canul</h4>
    <h4>Fernando Gomez Toleto</h4>
    </div>
    </div>
    </>
  )
}

export default Home
