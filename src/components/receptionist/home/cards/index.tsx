import React from 'react'
import { Button, Card, Typography } from '@mui/material'
import BugReportIcon from '@mui/icons-material/BugReport';
import SickIcon from '@mui/icons-material/Sick';
import PersonIcon from '@mui/icons-material/Person';

import './style.scss';

function TopCard() {
    return (
        <div className='receptionist-top-cards'>
            <Button className='top-card'>
                <PersonIcon sx={{ fontSize: '4rem' }} className='icon' />
                <Typography variant='h2'><b>2</b></Typography>
                <Typography variant='h5'><b>Doctors</b></Typography>
                <Typography variant='subtitle1'><b>Go To Doctors Page</b></Typography>
            </Button>
            <Button className='top-card'>
                <SickIcon sx={{ fontSize: '4rem' }} className='icon' />
                <Typography variant='h2'><b>2</b></Typography>
                <Typography variant='h5'><b>Today's patients</b></Typography>
                <Typography variant='subtitle1'><b>Go To Doctors Page</b></Typography>
            </Button>
            <Button className='top-card'>
                <BugReportIcon sx={{ fontSize: '4rem' }} className='icon' />
                <Typography variant='h2'><b>2</b></Typography>
                <Typography variant='h5'><b>Reports</b></Typography>
                <Typography variant='subtitle1'><b>Go To Doctors Page</b></Typography>
            </Button>
        </div>
    )
}

export default TopCard