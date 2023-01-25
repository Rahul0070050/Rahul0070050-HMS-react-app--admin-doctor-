import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../../components/receptionist/navbar'
import SideBar from '../../../components/receptionist/sidebar'

import './style.scss'

function Home() {
  return (
    <div className='receptionist-home'>
      <NavBar />
      <div className="receptionist-home-body">
        <SideBar />
        <div className="receptionist-home-window">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home