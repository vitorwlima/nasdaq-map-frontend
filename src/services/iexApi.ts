import axios from 'axios'

const iexApi = axios.create({ baseURL: 'https://cloud.iexapis.com/' })

export default iexApi
