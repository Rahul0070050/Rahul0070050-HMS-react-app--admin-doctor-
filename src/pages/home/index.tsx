import React, { useState } from 'react'
import Appointments from '../../components/appointments'
import Chats from '../../components/Chats'
import HomeMenu from '../../components/homeMenu'
import HomeOptions from '../../components/homeOptions'
import TodoList from '../../components/todos'

import './style.scss'

function Home() {
  const [ComponentState, setComponentState] = useState<JSX.Element>(Appointments)

  function getComponent(opt: String) {
    switch (opt) {
      case 'appoinments':
        setComponentState(Appointments)
        break;
      case 'todo':
        setComponentState(TodoList)
        break;
      case 'chats':
        setComponentState(Chats)
        break;
      default:
        setComponentState(Appointments)
        break;
    }
  }
  return (
    <div className='home'>
      <div className="options">
        <HomeOptions getComponent={getComponent} />
      </div>
      <div className="info">
        <div className="content">
          {ComponentState}
        </div>
      </div>
      <div className="menu">
        <HomeMenu getComponent={getComponent} />
      </div>
    </div>
  )
}

export default Home
