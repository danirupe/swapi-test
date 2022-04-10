import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiCircle, BiCloudSnow, BiWater } from 'react-icons/bi'
import { FiUsers, FiRotateCw } from 'react-icons/fi'
import { GiOrbit } from 'react-icons/gi'

const Popup = (props) => {
  const { data, open, handleClose } = props

  if (!open) return

  return (
    <div className={`modal ${open ? 'active-modal' : ''}`}>
      <div className='modal__content'>
        <h4 className='modal__title'>{data.name}</h4>
        <AiOutlineClose className='modal__close' onClick={handleClose} />

        <div className='modal__message'>
          <div className='modal__list'>
            <p className='modal__item'>
              <BiCircle className='modal__icon' /> Diameter:
              <span className='modal__span'>{data.diameter}</span>
            </p>
            <p className='modal__item'>
              <FiRotateCw className='modal__icon' /> Rotation period:
              <span className='modal__span'>{data.rotation_period}</span>
            </p>
            <p className='modal__item'>
              <GiOrbit className='modal__icon' /> Orbital period:
              <span className='modal__span'>{data.orbital_period}</span>
            </p>
            <p className='modal__item'>
              <BiCloudSnow className='modal__icon' /> Climate:
              <span className='modal__span'>{data.climate}</span>
            </p>
            <p className='modal__item'>
              <BiWater className='modal__icon' /> Surface water:
              <span className='modal__span'>{data.surface_water}</span>
            </p>
            <p className='modal__item'>
              <FiUsers className='modal__icon' /> Population:
              <span className='modal__span'>{data.population}</span>
            </p>
          </div>
        </div>

        <div className='modal__buttons'>
          <button value='cancel' className='button' onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
