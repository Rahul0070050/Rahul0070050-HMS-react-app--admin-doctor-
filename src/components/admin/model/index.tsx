import React, { ChangeEvent, useState } from 'react'
import { Button, Card, FormControl, FormGroup, TextField, Typography } from '@mui/material'

import './style.scss';

type propType = {
    heading: string,
    handleOnSubmit: (prop: formData) => void
}
type formData = {
    username: String,
    password: String,
    email: String,
    salary: String,
    department: String
}
function ModelWindow({ heading, handleOnSubmit }: propType) {
    const [formData, setformData] = useState({ department: '', username: '', password: '', email: '', salary: '' })
    const [formDataErr, setformDataErr] = useState({ department: false, username: false, password: false, email: false, salary: false })
    function Submit() {
        if (formData.department === '' || formData.username === '' || formData.password === '' || formData.email === '' || formData.salary === '') {
            setformDataErr(prev => {
                return {
                    ...prev,
                    username: formData.username === '' ? true : false,
                    password: formData.password === '' ? true : false,
                    email: formData.email === '' ? true : false,
                    salary: formData.salary === '' ? true : false,
                    department: formData.department === '' ? true : false
                }
            })
            return;
        }
        handleOnSubmit(formData)
    }

    function handleOnChage(e: ChangeEvent<HTMLInputElement>) {
        setformData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <Card variant='outlined' className='admin-model'>
            <Typography variant='h5' sx={{ m: '1rem' }}>{heading}</Typography>
            <form>
                <div className="form-group">
                    <FormGroup>
                        <Typography sx={{ color: `${formDataErr.username ? 'red' : 'black'}` }}>Username</Typography>
                        <TextField onChange={handleOnChage} name="username" variant='standard' />
                    </FormGroup>
                    <FormGroup>
                        <Typography sx={{ color: `${formDataErr.password ? 'red' : 'black'}` }}>Password</Typography>
                        <TextField onChange={handleOnChage} name="password" variant='standard' />
                    </FormGroup>
                </div>
                <div className="form-group">
                    <FormGroup>
                        <Typography sx={{ color: `${formDataErr.email ? 'red' : 'black'}` }}>Email</Typography>
                        <TextField onChange={handleOnChage} name="email" variant='standard' />
                    </FormGroup>
                    <FormGroup>
                        <Typography sx={{ color: `${formDataErr.salary ? 'red' : 'black'}` }}>Salary</Typography>
                        <TextField onChange={handleOnChage} name="salary" variant='standard' type="number" />
                    </FormGroup>
                </div>
                <div className="form-group">
                    <FormGroup>
                        <Typography sx={{ color: `${formDataErr.email ? 'red' : 'black'}` }}>Department</Typography>
                        <TextField onChange={handleOnChage} name="department" variant='standard' />
                    </FormGroup>
                </div>
                <FormControl>
                    <Button variant='contained' onClick={Submit}>Save</Button>
                </FormControl>
            </form>
        </Card>
    )
}

export default ModelWindow
