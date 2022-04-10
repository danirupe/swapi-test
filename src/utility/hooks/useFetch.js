import { useState } from 'react'

export const useFetch = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalRows, setTotalRows] = useState(0)

  const getPlanet = (people) => {
    if (people.length) {
      Promise.all(
        people.map((item) => {
          return fetch(item.homeworld)
            .then((res) => res.json())
            .then((res) => {
              item = { ...item, planet: res }
              return item
            })
        })
      )
        .then((data) => setUsers(data))
        .then(() => setLoading(false))
    }
  }

  const fetchData = async (path, page = 1) => {
    setLoading(true)
    const response = await fetch(`https://swapi.dev/api/${path}/?page=${page}`)
    const res = await response.json()
    setTotalRows(res.count)
    getPlanet(res.results)
  }

  return [totalRows, users, fetchData, loading]
}
