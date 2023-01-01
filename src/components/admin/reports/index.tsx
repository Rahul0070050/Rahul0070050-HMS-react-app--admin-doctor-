import React from 'react'
import { Button, Card, Paper, Typography } from '@mui/material'

import './style.scss'

function Reports() {
  return (
    <Card className='admin-reports'>
      <Typography sx={{ m: '1rem', fontSize: '1.5rem', fontWeight: '700' }}>
        Reports
      </Typography>
      <div className="reports">
        <Card sx={{ m: '1rem 1rem 0 1rem', p: '1rem' }}>
          <Typography><h4>Key Word</h4></Typography>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus</p>
          <Button>View</Button>
          <Button>clear</Button>
        </Card>
        <Card sx={{ m: '1rem 1rem 0 1rem', p: '1rem' }}>
          <Typography><h4>Key Word</h4></Typography>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus</p>
          <Button>View</Button>
          <Button>clear</Button>
        </Card>
        <Card sx={{ m: '1rem 1rem 0 1rem', p: '1rem' }}>
          <Typography><h4>Key Word</h4></Typography>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus</p>
          <Button>View</Button>
          <Button>clear</Button>
        </Card>
        <Card sx={{ m: '1rem 1rem 0 1rem', p: '1rem' }}>
          <Typography><h4>Key Word</h4></Typography>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus</p>
          <Button>View</Button>
          <Button>clear</Button>
        </Card>
        <Card sx={{ m: '1rem 1rem 0 1rem', p: '1rem' }}>
          <Typography><h4>Key Word</h4></Typography>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus</p>
          <Button>View</Button>
          <Button>clear</Button>
        </Card>
        <Card sx={{ m: '1rem 1rem 0 1rem', p: '1rem' }}>
          <Typography><h4>Key Word</h4></Typography>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus</p>
          <Button>View</Button>
          <Button>clear</Button>
        </Card>
        <Card sx={{ m: '1rem 1rem 0 1rem', p: '1rem' }}>
          <Typography><h4>Key Word</h4></Typography>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus</p>
          <Button>View</Button>
          <Button>clear</Button>
        </Card>
        <Card sx={{ m: '1rem 1rem 0 1rem', p: '1rem' }}>
          <Typography><h4>Key Word</h4></Typography>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus</p>
          <Button>View</Button>
          <Button>clear</Button>
        </Card>
      </div>
    </Card>
  )
}

export default Reports