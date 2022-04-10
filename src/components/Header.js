import React from 'react'
import Logo from './Logo'
import Switcher from './Switcher'

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__container container grid'>
        <Logo name='Planetarium' to='/' />
        <Switcher />
      </nav>
    </header>
  )
}

export default Header
