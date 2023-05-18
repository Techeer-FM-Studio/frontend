import axios from 'axios'

export const axiosCustom = axios.create({
    baseURL:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api/v1'
            : 'http://localhost:8080/api/v1',
})
