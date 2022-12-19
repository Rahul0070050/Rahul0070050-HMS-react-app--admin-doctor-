import { FormControl, FormLabel, TextField } from '@mui/material'
import React from 'react'
import ChatPopUp from '../../components/chatPop-up'

import './style.scss'

function Login() {
  return (
    <div className='login'>
      <div className="login-container">
        <form>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <TextField variant='standard' />
          </FormControl>
        </form>
      </div>
      <ChatPopUp />
    </div>
  )
}

export default Login