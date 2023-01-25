import React from 'react'
import { Button, Typography } from '@mui/material'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import './style.scss';

type props = {
  name: String,
  doctorsCount: String,
  patientsCount: String,
}
function Department({ name, doctorsCount ,patientsCount}: props) {
  return (
    <Button className='department-single-card'>
      <Typography variant='h5'><b>{name}</b></Typography>
      <VolunteerActivismIcon className='icon' sx={{fontSize: '4rem'}}/>
      <div className="info">
        <Typography variant='subtitle1'><b>Doctors: {doctorsCount}</b></Typography>
        <Typography variant='subtitle1'><b>Today's Patients: {patientsCount}</b></Typography>
      </div>
    </Button>
  )
}

export default Department