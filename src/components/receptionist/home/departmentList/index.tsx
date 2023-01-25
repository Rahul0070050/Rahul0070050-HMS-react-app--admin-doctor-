import React from 'react'
import { Card, Typography } from '@mui/material'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

import Department from '../department'

import './style.scss'

function DepartmentList() {
    return (
        <div className='department-card-list'>
            <Typography sx={{ mx: '1rem', mt: '1rem' }} variant='h5'><b>Departments</b></Typography>
            <div className="cards">
                <Department doctorsCount={'14'} name={'GYNAECOLOGY'} patientsCount={'16'} />
                <Department doctorsCount={'14'} name={'GYNAECOLOGY'} patientsCount={'16'} />
                <Department doctorsCount={'14'} name={'GYNAECOLOGY'} patientsCount={'16'} />
                <Department doctorsCount={'14'} name={'GYNAECOLOGY'} patientsCount={'16'} />
                <Department doctorsCount={'14'} name={'GYNAECOLOGY'} patientsCount={'16'} />
                <Department doctorsCount={'14'} name={'GYNAECOLOGY'} patientsCount={'16'} />
            </div>
        </div>
    )
}

export default DepartmentList