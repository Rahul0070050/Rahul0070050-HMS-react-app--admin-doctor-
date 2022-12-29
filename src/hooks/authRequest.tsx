import axios from 'axios'

export const authRequest = axios.create({
    baseURL: 'http://localhost:3003',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('hms-jwt') as String || ""}`
    }
})