import React, { useState, useReducer, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import ThemeReducer from './ThemeReducer'

const ThemeState = (props) => {
  let initialState = { skin: 'light' }
  let colorScheme
  let element = window.document.body

  useEffect(() => {
    colorScheme = window.matchMedia('(prefers-color-scheme: dark)')

    if (colorScheme.matches) {
      element.classList.add('dark')
      dispatch({ type: 'HANDLE_SKIN', payload: 'dark' })
    } else {
      element.classList.add('light')
      dispatch({ type: 'HANDLE_SKIN', payload: 'light' })
    }
  }, [])

  const [state, dispatch] = useReducer(ThemeReducer, initialState)

  useEffect(() => {
    element.classList.remove(...element.classList)

    element.classList.add(state.skin)
  }, [state.skin])

  const handleSkin = (value) => {
    dispatch({ type: 'HANDLE_SKIN', payload: value })
  }

  return (
    <ThemeContext.Provider
      value={{
        state,
        handleSkin
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeState
