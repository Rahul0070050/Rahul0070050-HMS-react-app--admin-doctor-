import React, { useState } from 'react'
import AppoinmentCard from '../appoinmentCards'
import appointments from '../../../../utils/appoinments.json'

import './style.scss'
import { TextField } from '@mui/material'


type data = {
  id: String;
  name: String;
  Time: String;
  cancel: Boolean;
  pendding: boolean;
}

function Appointments(): JSX.Element {
  const [appoinments, setAppoinments] = useState<data[]>(appointments)
  const [appoinmentsSearch, setAppoinmentsSearch] = useState('')
  const [pendingSearch, setPendingSearch] = useState('')


  function handleAppoinmentsState(id: String, arg: String) {
    if (arg === 'cancel') {
      setAppoinments((items) => [...items.filter(item => item.id === id ? item.cancel = true : item)])
    } else {
      setAppoinments((items) => [...items.filter(item => item.id === id ? item.pendding = true : item)])
    }
  }

  return (
    <div className='apoinments'>
      <div className="header">
        <h1>Today's Appoinments</h1>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          placeholder="Search by id"
          variant="filled"
          size="small"
          onChange={(e) => setAppoinmentsSearch(e.target.value)}
        />
      </div>
      <div className="todays">
        {appoinmentsSearch ? (appoinments.map((data, i) => {
          if (data.pendding || data.cancel || !data.id.includes(appoinmentsSearch)) return null
          return <AppoinmentCard {...data} handleAppoinmentsState={handleAppoinmentsState} key={i} />
        })) : (appoinments.map((data, i) => {
          if (data.pendding || data.cancel) return null
          return <AppoinmentCard {...data} handleAppoinmentsState={handleAppoinmentsState} key={i} />
        }))}
      </div>
      <div className="header">
        <h1>Pending Appoinments</h1>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          placeholder="Search by id"
          variant="filled"
          size="small"
          onChange={(e) => setPendingSearch(e.target.value)}
        />
      </div>
      <div className="pending">
        {pendingSearch ? (appoinments.map((data, i) => {
          if (!data.pendding || data.cancel || !data.id.includes(pendingSearch)) return null
          return <AppoinmentCard {...data} key={i} handleAppoinmentsState={handleAppoinmentsState} />
        })) : (appoinments.map((data, i) => {
          if (!data.pendding || data.cancel) return null
          return <AppoinmentCard {...data} key={i} handleAppoinmentsState={handleAppoinmentsState} />
        }))}
      </div>
    </div>
  )
}

export default Appointments