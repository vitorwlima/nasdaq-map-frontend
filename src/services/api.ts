import axios from 'axios'

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_SERVER, withCredentials: true })

export default api
