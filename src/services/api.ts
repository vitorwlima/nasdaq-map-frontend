import axios from 'axios'

const api = axios.create({ baseURL: process.env.NEXT_SERVER })

export default api
