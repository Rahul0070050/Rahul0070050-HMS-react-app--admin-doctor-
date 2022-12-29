import React, { useState } from 'react'
import { Button, Card, IconButton, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTransition, animated } from 'react-spring'

import './style.scss'

type data = {
    id: String;
    name: String;
    Time: String;
    cancel: Boolean;
    pendding: Boolean;
    handleAppoinmentsState: (val: String, arg: String) => void;
}
function AppoinmentCard({ name, id, Time, pendding, handleAppoinmentsState }: data) {

    const transition = useTransition(pendding, {
        from: {y: '2rem',opacity: '0'},
        enter: {y:'0', opacity: '1'},
        leave: {transform: 'scale(0.4)',opacity: '0'}
    })

    const [clicked, setClicked] = useState(false)

    function arrowClickHandler(arg: String = "pending") {
        handleAppoinmentsState(id, arg)
        setClicked(clicked => !clicked)
    }
    return (
        <>
            {transition((style,item) =>  <animated.div style={{...style, position: 'relative', display: 'inline-block' }} >
                <Card className={`dropdown-options ${clicked ? 'display' : 'hidde'}`} sx={{ transition: 'all ease-in-out 0.1s' }}>
                    {pendding ? null : <Button onClick={() => arrowClickHandler()}>Pending</Button>}
                    <Button onClick={() => arrowClickHandler('cancel')}>Cancel</Button>
                </Card>
                <Card className='appoinment-card'>
                    <IconButton sx={{ position: 'absolute', right: '1rem' }} onClick={() => setClicked((clicked) => !clicked)}>
                        <KeyboardArrowDownIcon sx={{ transform: clicked ? 'rotate(180deg)' : 'rotate(0)', transition: 'all ease-in-out 0.5s', }} />
                    </IconButton>
                    <Typography>
                        Id: {id}
                    </Typography>
                    <Typography>
                        Name: {name}
                    </Typography>
                    {pendding ? null : <Typography> Time: {Time} </Typography>}
                </Card>
            </animated.div>)
            }
        </>
    )
}

export default AppoinmentCard