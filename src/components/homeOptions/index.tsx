import React from 'react'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

import './style.scss'

function HomeOptions() {
    return (
        <div className='home-options'>
            <div className="left-1">
                <div className="card">
                    <PlaylistAddCheckIcon sx={{ fontSize: '6rem' }} />
                </div>
                <div className="card">
                    <BookmarkIcon sx={{ fontSize: '6rem' }} />
                </div>
                <div className="card">
                    <LocalHotelIcon sx={{ fontSize: '6rem' }} />
                </div>
                <div className="card">
                    <BloodtypeIcon sx={{ fontSize: '6rem' }} />
                </div>
            </div>
        </div>
    )
}

export default HomeOptions
