import React from 'react'
import { Typography } from '@mui/material'
import BarChart from './Barcher'
import LineChart from './lineChart'
import PieChart from './pieChart'

import './style.scss'

function Charts() {
  return (
    <div className='admin-charts'>
      <span>
        <Typography>Doctors</Typography>
        <BarChart />
      </span>
      <span>
        <Typography>Department</Typography>
        <PieChart />
      </span>
      <span>
        <Typography>Profit</Typography>
        <LineChart />
      </span>
    </div>
  )
}

export default Charts