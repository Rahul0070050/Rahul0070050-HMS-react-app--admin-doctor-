import React, { ChangeEvent, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Card, Checkbox, FormControlLabel, ListItem, TextField } from '@mui/material';
import { AxiosError } from 'axios';

import Background from '../../components/login/background';
import ChatPopUp from '../../components/login/chatPop-up'
import LoginBackgroundImage from '../../images/loginpage-image.svg'

import useRequest from '../../hooks/useRequest';

import './style.scss'

function Login() {
  const { request } = useRequest()
  const location = useNavigate()

  const [userData, setuserData] = useState({ username: '', password: '' })
  const [userDataErr, setuserDataErr] = useState({ username: false, password: false })
  const [role, setRole] = useState('Admin')
  const [message, setMessage] = useState<String>('')

  function shoMessage(msg: String) {
    setMessage(msg)
    setInterval(() => {
      setMessage('')
    }, 10000)
  }
  function handleOnchange(e: ChangeEvent<HTMLInputElement>) {
    setuserData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleSubmit() {
    if (!userData.username || !userData.password) {
      setuserDataErr(prev => {
        return {
          ...prev,
          username: userData.username === '' ? true : false,
          password: userData.password === '' ? true : false,
        }
      })
      return
    }

    if (role === 'Doctor') {
      request.post('/doctor/login', { ...userData, role }).then((res: any) => {
        localStorage.setItem('doctor-jwt', `${res.data.token}`)
        location('/doctor')
      }).catch((err: AxiosError) => {
        const msg: { msg: String } = err.response?.data as { msg: String }
        shoMessage(msg?.msg)
      })
    }

    if (role === 'Receptionist') {
      request.post('/receptionist/login', { ...userData, role }).then((res: any) => {
        localStorage.setItem('receptionist-jwt', `${res.data.token}`)
        location('/receptionist')
      }).catch((err: AxiosError) => {
        const msg: { msg: String } = err.response?.data as { msg: String }
        shoMessage(msg?.msg)
      })
    }

    if (role === 'Admin') {
      request.post('/admin/login', { ...userData, role }).then((res: any) => {
        localStorage.setItem('admin-jwt', `${res.data.token}`)
        location('/')
      }).catch((err: AxiosError) => {
        const msg: { msg: String } = err.response?.data as { msg: String }
        shoMessage(msg?.msg)
      })
    }

  }
  return (
    <div className='login'>
      <div className="login-outer-container">
        <div className="login-container">
          <div className="background-image">
            <Background img={LoginBackgroundImage} />
          </div>
          <form>
            <h1><strong><h1>HMS</h1></strong></h1>
            <h1 className='welcome'><strong>Welcome Back {role}!</strong></h1>
            <span className='welcome-text'>Let's get you loged in</span>
            <div className="form">
              <span className='warning'>{userDataErr.username ? 'invalid username' : ''}</span>
              <TextField sx={{ mb: '1rem' }} value={userData.username} name="username" onChange={handleOnchange} id="standard-basic" label="username" variant="standard" />
              <span className='warning'>{userDataErr.password ? 'invalid password' : ''}</span>
              <TextField id="standard-basic" value={userData.password} name="password" onChange={handleOnchange} label="password" variant="standard" type="password" />
              &nbsp;
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
              <button onClick={handleSubmit} type='button'>login</button>
            </div>
          </form>
          <div className="select-role">
            <ListItem>
              <FormControlLabel onClick={() => setRole('Doctor')} checked={role === 'Doctor' ? true : false} control={<Checkbox />} label="Doctor" />
              <FormControlLabel onClick={() => setRole('Receptionist')} checked={role === 'Receptionist' ? true : false} control={<Checkbox />} label="Receptionist" />
              <FormControlLabel onClick={() => setRole('Admin')} checked={role === 'Admin' ? true : false} control={<Checkbox />} label="Admin" />
            </ListItem>
          </div>
        </div>
      </div>
      <Card className={`login-message ${message && 'message'}`}>
        {message && message}
      </Card>
      <ChatPopUp />
    </div>
  )
}

export default Login