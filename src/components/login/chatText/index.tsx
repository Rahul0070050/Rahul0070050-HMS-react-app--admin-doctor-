import React from 'react'

import './style.scss'
function ChatText({ position }: { position: String }) {
  return (
    <>
      <div className="text" style={{ justifyContent: `${position}` }}>
        {position === 'start' ? (
          <>
            <img src="./logo192.png" alt="admin-logo" />
            <div className='chat-text'style={{marginLeft: '0.5rem'}}>hjk</div>
          </>
        ) : (
          <>
            <div className='chat-text' style={{marginRight: '0.5rem'}}>hjk</div>
            <img src="./logo192.png" alt="admin-logo" />
          </>
        )}
      </div>
    </>
  )
}

export default ChatText