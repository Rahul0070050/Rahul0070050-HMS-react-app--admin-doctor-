import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FormLabel } from '@mui/material';


import './style.scss'

function HomeMenu(prop:{getComponent:(val:String) => void}) {
  const {getComponent} = prop
  return (
    <div>
      <div className="menu-items">
        <div className="profile">
          <AccountCircleIcon sx={{ fontSize: '6rem' }} />
          <div>
            <FormLabel>Rahul</FormLabel>
          </div>
        </div>
        <div className="item item-1" onClick={() => getComponent('appoinments')}>
          <h3>Today's Appointments</h3>
        </div>
        <div className="item item-2">
          <h3>All Patients</h3>
        </div>
        <div className="item item-3">
          <h3>Docters</h3>
        </div>
        <div className="item item-4">
          <h3>Compose Email</h3>
        </div>
        <div className="item item-5" onClick={() => getComponent('chats')}>
          <h3>Chats</h3>
        </div>
        <div className="item item-6">
          <h3>Bloge</h3>
        </div>
        <div className="item item-7">
          <h3>Profile</h3>
        </div>
      </div>
    </div>
  )
}

export default HomeMenu
