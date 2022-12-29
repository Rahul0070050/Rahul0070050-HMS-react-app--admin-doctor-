import React from 'react'

import './style.scss'
function Background({img}:any) {
  return (
    <div className='background'>
      <img src={img} alt="" />
    </div>
  )
}

export default Background