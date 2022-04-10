import React, { useState, useEffect, useContext } from 'react'
import { useFetch } from '../utility/hooks/useFetch'
import Popup from '../components/Popup'
import Search from '../components/Search'
import Loader from '../components/Loader'
import { ThemeContext } from '../utility/context/ThemeContext'

import DataTable from 'react-data-table-component'
import moment from 'moment'

const tableOptions = {
  noRowsPerPage: true
}

const Users = () => {
  const [totalRows, users, fetchData, loading] = useFetch()
  const [searchTyped, setSearchTyped] = useState('')
  const [searchFilter, setSearchFilter] = useState('name')
  const [filteredData, setFilteredData] = useState([])
  const [open, setOpen] = useState(false)
  const [popupData, setPopupData] = useState()
  const { state } = useContext(ThemeContext)

  const columns = [
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: 'Height',
      selector: (row) =>
        row.height === 'unknown' ? 0 : Number(row.height).toFixed(),
      sortable: true
    },
    {
      name: 'Mass',
      selector: (row) =>
        row.mass === 'unknown' ? 0 : Number(row.mass).toFixed(),
      sortable: true
    },
    {
      name: 'Created',
      selector: (row) => row.created,
      sortable: true,
      format: (row) => moment(row.created).format('lll')
    },
    {
      name: 'Edited',
      selector: (row) => row.edited,
      sortable: true,
      format: (row) => moment(row.edited).format('lll')
    },
    {
      name: 'Planet name',
      selector: (row) => row.planet.name,
      sortable: true,
      cell: (row) => {
        return (
          <p
            className='table__button'
            onClick={() => {
              setOpen(!open)
              setPopupData(row.planet)
            }}
          >
            {row.planet.name}
          </p>
        )
      }
    }
  ]

  const dataToRender = () => {
    if (searchTyped.length) {
      return filteredData
    } else {
      return users
    }
  }

  const handleSearch = (e) => {
    let value
    e ? (value = e.target.value) : (value = '')

    let updatedData = []
    const dataToFilter = () => {
      if (searchTyped.length) {
        return filteredData
      } else {
        return users
      }
    }

    setSearchTyped(value)

    if (value.length) {
      let searchBy

      updatedData = dataToFilter().filter((item) => {
        searchFilter === 'name'
          ? (searchBy = item['name'])
          : (searchBy = item['planet']['name'])

        const startsWith =
          searchBy && searchBy.toLowerCase().startsWith(value.toLowerCase())
        const includes =
          searchBy && searchBy.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchTyped(value)
    }
  }

  const handlePageChange = (page) => {
    fetchData('people', page)
  }

  useEffect(() => {
    fetchData('people', 1)
  }, [])

  return (
    <section className='section users'>
      <div className='users__container container'>
        <Search filter={setSearchFilter} inputChange={handleSearch} />
        <DataTable
          columns={columns}
          data={dataToRender()}
          progressPending={loading}
          progressComponent={<Loader />}
          paginationComponentOptions={tableOptions}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          theme={state.skin === 'light' ? 'default' : 'dark'}
        />
        <Popup
          data={popupData}
          open={open}
          handleClose={() => setOpen(!open)}
        />
      </div>
    </section>
  )
}

export default Users
