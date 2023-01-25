import React from 'react'
import axios from 'axios'

function useRequest() {
    
    const request = axios.create({
        baseURL: 'http://localhost:3001',
        headers: {
            jwt: `${localStorage.getItem('hms-jwt') as String || ""}`
        }
    })
    request.interceptors.response.use((value) => {
        return new Promise((resolve, reject) => {
            console.log('from success middleware', value.data);
            resolve(value)
        })
    }, (error) => {
        return new Promise((resolve, reject) => {
            console.log('from error middleware',error);
            reject(error)
        })
    })

    request.interceptors.request.use((value) => {
        return new Promise((resolve, reject) => {
            resolve(value)
        })
    })

    return { request }
}

export default useRequest