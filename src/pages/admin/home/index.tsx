import { Image } from '@mui/icons-material'
import { Card, CardContent, FormGroup, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../navbar'

import './style.scss'
function Home() {
    return (
        <div>
            <Navbar />
            <div className="admin-body">
                {/* <div className="header">
                    <Card sx={{ width: '15rem' }}>
                        <CardContent>
                            <div className='card-text'>
 creativetimofficial/material-dashboard-react/src                               <img src="data:image/png;base64,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" alt="" />
                                <Typography>
                                    <h1><strong>24</strong></h1>
                                    <strong>Total Staffs</strong>
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </div> */}
            </div>
        </div>
    )
}

export default Home
