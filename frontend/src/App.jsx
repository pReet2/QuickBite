/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Card from './components/Card/Card'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'

const App = () => {
  return (
    <div className='app'>

      <Navbar/>
      <Home/>
      <ExploreMenu/>
      <Card/>

      
    </div>
  )
}

export default App
