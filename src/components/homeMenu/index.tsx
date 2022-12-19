import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FormLabel } from '@mui/material';


import './style.scss'
import { Link, NavLink } from 'react-router-dom';

function HomeMenu() {
  return (
    <div>
      <div className="menu-items">
        <div className="profile">
          <AccountCircleIcon sx={{ fontSize: '6rem' }} />
          <div>
            <FormLabel>Rahul</FormLabel>
          </div>
        </div>
        <NavLink to="/">
          <div className="item item-1">
            <h3>Today's Appointments</h3>
          </div>
        </NavLink>
        <NavLink to="/patients">
          <div className="item item-2">
            <h3>All Patients</h3>
          </div>
        </NavLink>
        <NavLink to="/docters">
          <div className="item item-3">
            <h3>Docters</h3>
          </div>
        </NavLink>
        <NavLink to="/compose-email">
          <div className="item item-4">
            <h3>Compose Email</h3>
          </div>
        </NavLink>
        <NavLink to="/chat">
          <div className="item item-5">
            <h3>Chats</h3>
          </div>
        </NavLink>
        <NavLink to="/bloge">
          <div className="item item-6">
            <h3>Bloge</h3>
          </div>
        </NavLink>
        <NavLink to="/profile">
          <div className="item item-7">
            <h3>Profile</h3>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default HomeMenu
