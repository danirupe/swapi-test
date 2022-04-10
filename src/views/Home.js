import React from 'react'
import Header from '../components/Header'
import Users from './Users'

const Home = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Users />
      </main>
    </>
  )
}

export default Home
