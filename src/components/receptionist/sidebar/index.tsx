import React from 'react'
import { Card, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import './style.scss'

function SideBar() {
    return (
        <Card className="receptionist-sidebar">
            <Typography><NavLink to='/receptionist'>Home</NavLink></Typography>
            <Typography><NavLink to='doctors'>Patients</NavLink></Typography>
            <Typography><NavLink to='doctors'>Doctors</NavLink></Typography>
            <Typography><NavLink to='receptionists'>Chat</NavLink></Typography>
            <Typography><NavLink to='rooms'>Rooms</NavLink></Typography>
        </Card>
    )
}

export default SideBar