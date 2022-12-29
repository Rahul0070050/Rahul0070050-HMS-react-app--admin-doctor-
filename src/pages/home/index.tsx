import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeMenu from '../../components/home/homeMenu'
import HomeOptions from '../../components/home/homeOptions'


import './style.scss'

function Home() {
  return (
    <div className='home'>
      <div className="options" data-testid="options">
        <HomeOptions />
      </div>
      <div className="info" data-testid="info">
        <div className="content">
          <Outlet />
        </div>
      </div>
      <div className="menu" data-testid="menu">
        <HomeMenu />
      </div>
    </div>
  )
}

export default Home
