import {
    getAccessToken,
    setAccessToken,
    getRefreshToken,
} from '../func/localStorage.js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    headers: {
        'Content-Type': 'application/json',
    },
})

const useAxiosSecure = () => {
    const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = getAccessToken()
            config.headers.Authorization = token ? `Bearer ${token}` : ''
            return config
        })

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && error.response.status === 401) {
                    console.log('Response Interceptor - Unauthorized')
                    localStorage.removeItem('access-token')
                    // Fetch a new access token using refresh token
                    const refreshToken = getRefreshToken()
                    try {
                        const response = await axios.post(
                            `${
                                import.meta.env.VITE_BASE_URL
                            }/user/token/refresh/`,
                            {
                                refresh: refreshToken,
                            }
                        )

                        const newAccessToken = response?.data?.data?.access
                        setAccessToken(newAccessToken)
                        const originalRequest = error.config
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
                        return axiosSecure(originalRequest)
                    } catch (error) {
                        console.error('Failed to refresh access token', error)
                        navigate('/')
                    }
                }
                return Promise.reject(error)
            }
        )
    }, [])

    return [axiosSecure]
}

export default useAxiosSecure
