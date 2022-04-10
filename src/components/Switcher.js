import React, { useState, useEffect, useContext } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { ThemeContext } from '../utility/context/ThemeContext'

const Switcher = () => {
  const { state, handleSkin } = useContext(ThemeContext)

  const ThemeToggler = () => {
    if (state.skin === 'dark') {
      return (
        <BiSun className='switcher__icon' onClick={() => handleSkin('light')} />
      )
    } else {
      return (
        <BiMoon className='switcher__icon' onClick={() => handleSkin('dark')} />
      )
    }
  }

  return (
    <div className='switcher'>
      <ThemeToggler />
    </div>
  )
}

export default Switcher
