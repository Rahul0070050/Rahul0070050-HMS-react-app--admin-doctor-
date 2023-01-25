import React from 'react'
import { Button, Card, Typography } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune';

import './style.scss'

import ReceptionistItem from '../../../components/admin/receptionist';

function Receptionist() {
    return (
        <div className='receptionist'>
            <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h4' sx={{ fontWeight: '600', m: '1rem' }}>Receptionists</Typography>
                <span>
                    <Button variant='contained' color='warning'>
                        <TuneIcon sx={{ m: '0 0.5rem 0 0' }} />
                        Filter
                    </Button>
                    <Button variant='contained' color='success' sx={{ m: '1rem' }}>New</Button>
                </span>
            </Card>
            <div className="receptionist-list">
                <ReceptionistItem />
            </div>
        </div>
    )
}

export default Receptionist