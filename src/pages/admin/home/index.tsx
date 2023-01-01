import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/navbar'
import Reports from '../../../components/admin/reports'
import Sidebar from '../../../components/admin/sidebar'

import './style.scss'

function Home() {
    const location = useNavigate()
    useEffect(() => {
        // const login = localStorage.getItem('doctor-login')
        // if(!login) {
        //     location('/login')
        // }
    }, [])
    return (
        <div className='admin-home'>
            <div className="admin-body">
                <Sidebar />
                <div className="col-1">
                    <Navbar />
                    <div className="outlet">
                        <Outlet />
                    </div>
                    <Reports />
                </div>
            </div>
        </div>
    )
}

export default Home
