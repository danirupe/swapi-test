import React from 'react'

const Search = (props) => {
  const { filter, inputChange } = props

  const handleFilter = (e) => {
    filter(e.target.value)
  }

  const handleInput = (e) => {
    inputChange(e)
  }

  return (
    <div className='search'>
      <div className='search__container container grid'>
        <div className='search__select'>
          <label className='search__label'>Search by: </label>
          <select name='searchFilter' onChange={handleFilter}>
            <option value='name'>Name</option>
            <option value='planet'>Planet</option>
          </select>
        </div>

        <div className='search__bar'>
          <input
            type='search'
            className='search__input'
            placeholder='Search...'
            onChange={handleInput}
          />
        </div>
      </div>
    </div>
  )
}

export default Search
