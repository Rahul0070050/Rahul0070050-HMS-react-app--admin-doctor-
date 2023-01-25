import { Button, Card, Typography } from '@mui/material'
import React from 'react'

import './style.scss'

function ReceptionistItem() {
  return (
    <Card>
      <div className='receptionist-single-list'>
        <Typography><b>Id</b></Typography>
        <Typography><b>Username</b></Typography>
        <Typography><b>Phone</b></Typography>
        <Typography><b>View</b></Typography>
      </div>
    </Card>
  )
}

export default ReceptionistItem