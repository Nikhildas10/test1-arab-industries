import React from 'react'
import './App.css'
import Landing from './Landing'
import Header from './components/Header'
import Aside from './components/Aside'
const App = () => {
  return (
    <div>
      <Header></Header>
    <div className='home'>
        <Aside></Aside>
        <Landing></Landing>
    </div>
    </div>
  )
}

export default App