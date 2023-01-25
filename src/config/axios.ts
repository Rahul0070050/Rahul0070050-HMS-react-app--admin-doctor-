import axios from 'axios'

export const adminRequest = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        jwt: `${localStorage.getItem('admin-jwt') as String || ""}`
    }
})

export const DoctorsRequest = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        jwt: `${localStorage.getItem('doctor-jwt') as String || ""}`
    }
})

export const request = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        jwt: `${localStorage.getItem('receptionist-jwt') as String || ""}`
    }
})