import React, { useEffect, useState } from 'react'
import { Button, Card, Typography } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune';

import Doctor from '../../../components/admin/doctor';
import ModelWindow from '../../../components/admin/model';
import { adminRequest, request } from '../../../config/axios';

import './style.scss'

type formData = {
  username: String,
  password: String,
  email: String,
  salary: String
}

type doctorType = {
  emailId: String,
  password: String,
  salary: String,
  username: String,
  _id: String,
  department: String,
  JoindDate: String
}
function Doctors() {
  const [showModel, setShowModel] = useState(false)
  const [message, setMessag] = useState({ success: '', msg: '' })
  const [doctors, setDoctors] = useState<doctorType[]>([])
  useEffect(() => {
    adminRequest.get('/admin/get/all/doctors').then(result => {
      setDoctors(result.data.result)
    })
  }, [])
  function handleOnSubmit(formData: formData) {
    console.log(formData);

    request.post('/admin/crete/doctor', { ...formData, emailId: formData.email }).then(result => {
      setMessag({ success: 'true', msg: result.data.msg })
      const doctor: doctorType = result.data.doctor as doctorType

      setDoctors((prev:doctorType[]) => {
        return [...prev, doctor ]
      })
      setShowModel(false)
      setInterval(() => {
        setMessag({ success: '', msg: '' })
      }, 10000)
    }).catch(err => {
      setMessag({ success: 'false', msg: err.response.data.msg })

      setInterval(() => {
        setMessag({ success: '', msg: '' })
      }, 10000)
    })

  }
  return (
    <div className='admin-docters-list'>
      <Card className={`alert ${message.success === 'true' && 'success' || message.success === 'false' && 'error'}`}>
        {message.msg}
      </Card>
      {showModel && <ModelWindow heading="Add New Doctor" handleOnSubmit={handleOnSubmit} />}
      <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='h4' sx={{ fontWeight: '600', m: '1rem' }}>Doctors</Typography>
        <span>
          <Button variant='contained' color='warning'>
            <TuneIcon sx={{ m: '0 0.5rem 0 0' }} />
            Filter
          </Button>
          <Button onClick={() => setShowModel(!showModel)} variant='contained' color='success' sx={{ m: '1rem' }}>New</Button>
        </span>
      </Card>
      <div className="doctors-list">
        {doctors && doctors.map((item: doctorType, i) => {
          const { _id, emailId, salary, username, department, JoindDate } = item
          return <Doctor
            key={i}
            ID={_id}
            Name={emailId}
            Department={department}
            Joind={JoindDate}
            Salary={salary}
            Username={username}
          />
        })}
      </div>
    </div>
  )
}

export default Doctors
