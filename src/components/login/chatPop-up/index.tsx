import { Chat, Close, SendRounded } from '@mui/icons-material'
import { ButtonBase, Card, CardContent } from '@mui/material'
import React, { useState } from 'react'
import ChatHelpOptions from '../chatHelpOptions'
import ChatText from '../chatText'

import './style.scss'

function ChatPopUp() {
    const [closeChat, setCloseChat] = useState(false)
    return (
        <div className="chat-sec">
            {closeChat && <Card className="chat-window">
                <CardContent sx={{ padding: '0' }}>
                    <div className="header">
                        <img src="./logo192.png" alt="admin-logo" />
                        <h3>Admin</h3>
                        <ButtonBase onClick={() => setTimeout(() => setCloseChat(status => !status), 300)} sx={{ padding: '0.3rem', borderRadius: '50%', marginLeft: '15rem' }} >
                            <Close />
                        </ButtonBase>
                    </div>
                    <div className="chat">
                        <ChatText position={'end'}/>
                        <ChatText position={'start'}/>
                        <ChatHelpOptions />
                    </div>
                    <div className="input">
                        <input className="input-field" />
                        <ButtonBase sx={{ padding: '0.5rem', margin: '0 0.3rem', borderRadius: '50%' }} >
                            <SendRounded sx={{ color: 'black', backgroundColor: '' }} />
                        </ButtonBase>
                    </div>
                </CardContent>
            </Card>}
            <Chat onClick={() => setTimeout(() => setCloseChat(status => !status), 200)} sx={{ fontSize: '4.5rem', backgroundColor: '#a7a7ff', padding: '1rem', borderRadius: '50px', float: 'right' }} />
        </div>
    )
}

export default ChatPopUp