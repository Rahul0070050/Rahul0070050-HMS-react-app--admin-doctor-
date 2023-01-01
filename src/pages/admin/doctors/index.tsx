import React from 'react'
import { AccountCircle } from '@mui/icons-material'
import { Button, Card, Input, InputAdornment, TextField, Typography } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune';

import './style.scss'
import Doctor from '../../../components/admin/doctor';

function Doctors() {
  return (
    <div className='admin-docters-list'>
      <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='h4' sx={{ fontWeight: '600', m: '1rem' }}>Doctors</Typography>
        <span>
          <Button variant='contained' color='warning'>
            <TuneIcon sx={{ m: '0 0.5rem 0 0' }} />
            Filter
          </Button>
          <Button variant='contained' color='success' sx={{ m: '1rem' }}>New</Button>
        </span>
      </Card>
      <div className="doctors-list">
      <Doctor />
      <Doctor />
      <Doctor />
      <Doctor />
      <Doctor />
      </div>
    </div>
  )
}

export default Doctors
