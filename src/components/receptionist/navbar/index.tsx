import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

import './style.scss'

function NavBar() {
  return (
    <AppBar position="static" sx={{py:'0.3rem',backgroundColor:'#012748', color:"white"}}>
      <Toolbar variant="dense">
        <IconButton edge="start" aria-label="menu" color='inherit' sx={{ mr: 2 }}>
          <b>HMS</b>
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar