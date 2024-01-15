import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'

import React from 'react'

function NavBar() {
  return (
    <nav className='navBar'>
        <h3>KinderTex</h3>
        <div className='vLine'></div>
        <div className='navBarButtons'>
            <button>Nosotros</button>
            <button>Productos</button>
            <button>Contacto</button>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar
